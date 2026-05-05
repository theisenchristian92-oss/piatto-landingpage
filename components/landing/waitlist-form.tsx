"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail, Send, Store } from "lucide-react";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const waitlistRoles = [
  { value: "guest", label: "Gast" },
  { value: "restaurant", label: "Restaurant" },
  { value: "creator", label: "Creator" },
] as const;

export type WaitlistRole = (typeof waitlistRoles)[number]["value"];

type FormState = {
  email: string;
  role: WaitlistRole;
  fullName: string;
  city: string;
  restaurantName: string;
  website: string;
  socialHandle: string;
  message: string;
  consentMarketing: boolean;
  company: string;
};

type SubmitState = "idle" | "loading" | "success" | "duplicate" | "error";

const initialFormState: FormState = {
  email: "",
  role: "guest",
  fullName: "",
  city: "Mainz",
  restaurantName: "",
  website: "",
  socialHandle: "",
  message: "",
  consentMarketing: false,
  company: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isWaitlistRole(value: unknown): value is WaitlistRole {
  return typeof value === "string" && waitlistRoles.some((role) => role.value === value);
}

export function WaitlistJumpButton({
  children,
  role = "guest",
  variant = "primary",
  compact = false,
  className,
}: {
  children: ReactNode;
  role?: WaitlistRole;
  variant?: "primary" | "secondary" | "olive";
  compact?: boolean;
  className?: string;
}) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("piatto:set-waitlist-role", { detail: { role } }));
    const waitlistSection = document.getElementById("waitlist");

    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = "/#waitlist";
  };

  const Icon = role === "restaurant" ? Store : ArrowRight;
  const variantClass = {
    primary: "bg-piatto-terracotta text-white shadow-[0_16px_30px_rgba(217,108,59,0.24)] hover:bg-[#C96035]",
    secondary: "border border-piatto-line bg-white/88 text-piatto-ink shadow-sm hover:border-piatto-olive/50 hover:bg-piatto-card",
    olive: "bg-piatto-olive text-white shadow-[0_16px_30px_rgba(85,98,59,0.2)] hover:bg-piatto-ink",
  }[variant];

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200",
        compact ? "min-h-10 px-4 py-2" : "min-h-12 px-5 py-3",
        variantClass,
        className,
      )}
    >
      <span>{children}</span>
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-24 bg-piatto-ink px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(22rem,1fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F3C5AD]">Waitlist</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Jetzt für die Piatto Beta vormerken.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            Trage dich ein und erfahre als Erste:r, wann Piatto in Mainz startet.
          </p>
          <div className="mt-7 flex flex-wrap gap-2 text-sm text-white/78">
            {["Mainz Beta", "Dish-first", "Waitlist geöffnet"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 font-semibold">
                <CheckCircle2 className="size-4 text-[#F3C5AD]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
}

function WaitlistForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("E-Mail reicht aus. Rolle ist optional.");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleRoleIntent = (event: Event) => {
      const role = (event as CustomEvent<{ role?: unknown }>).detail?.role;

      if (isWaitlistRole(role)) {
        setForm((current) => ({ ...current, role }));
      }

      window.setTimeout(() => emailRef.current?.focus(), 350);
    };

    window.addEventListener("piatto:set-waitlist-role", handleRoleIntent);
    return () => window.removeEventListener("piatto:set-waitlist-role", handleRoleIntent);
  }, []);

  const updateForm = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [key]: value }));

    if (submitState !== "loading") {
      setSubmitState("idle");
      setMessage("E-Mail reicht aus. Rolle ist optional.");
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = form.email.trim().toLowerCase();

    if (!emailPattern.test(normalizedEmail)) {
      setSubmitState("error");
      setMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      emailRef.current?.focus();
      return;
    }

    if (!form.consentMarketing) {
      setSubmitState("error");
      setMessage("Bitte stimmen Sie den Beta-Updates und der Kontaktaufnahme zu.");
      return;
    }

    setSubmitState("loading");
    setMessage("Die Anmeldung wird gespeichert.");

    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          role: form.role,
          fullName: form.fullName,
          city: form.city,
          restaurantName: form.restaurantName,
          websiteUrl: form.website,
          socialHandle: form.socialHandle,
          message: form.message,
          consentMarketing: form.consentMarketing,
          company: form.company,
          referrer: document.referrer || null,
          utmSource: params.get("utm_source"),
          utmMedium: params.get("utm_medium"),
          utmCampaign: params.get("utm_campaign"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; status?: string; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "request_failed");
      }

      if (result.status === "already_exists") {
        setSubmitState("duplicate");
        setMessage("Diese E-Mail steht bereits auf der Waitlist.");
        return;
      }

      setSubmitState("success");
      setMessage("Danke. Sie stehen auf der Piatto Waitlist.");
    } catch {
      setSubmitState("error");
      setMessage("Die Anmeldung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.");
    }
  };

  const isLoading = submitState === "loading";
  const isPositive = submitState === "success" || submitState === "duplicate";
  const isError = submitState === "error";

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-[1.65rem] border border-white/12 bg-[#FFF9F1] p-4 text-piatto-ink shadow-[0_26px_76px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-6"
    >
      <div className="flex items-start gap-3 border-b border-piatto-line pb-5">
        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-piatto-terracotta text-white shadow-[0_12px_24px_rgba(217,108,59,0.22)]">
          <Mail className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Sichern Sie sich einen Platz auf der Piatto Waitlist.</h3>
          <p className="mt-2 text-sm leading-6 text-piatto-muted">
            Wenige Angaben, klare Beta-Updates. Mainz ist voreingestellt.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold">E-Mail *</span>
          <span className="relative mt-2 block">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-piatto-muted" aria-hidden="true" />
            <input
              ref={emailRef}
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) => updateForm("email", event.target.value)}
              placeholder="name@beispiel.de"
              aria-invalid={isError}
              aria-describedby="waitlist-status"
              className="focus-ring h-12 w-full rounded-2xl border border-piatto-line bg-white pl-10 pr-3 text-base shadow-sm"
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-semibold">Rolle (optional)</span>
          <select
            value={form.role}
            onChange={(event) => updateForm("role", event.target.value as WaitlistRole)}
            className="focus-ring mt-2 h-12 w-full rounded-2xl border border-piatto-line bg-white px-3 text-base shadow-sm"
          >
            {waitlistRoles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </label>

        <label className="hidden" aria-hidden="true">
          Firma
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(event) => updateForm("company", event.target.value)}
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-piatto-line bg-white p-3 text-sm leading-6 text-piatto-muted shadow-sm">
        <input
          type="checkbox"
          required
          checked={form.consentMarketing}
          onChange={(event) => updateForm("consentMarketing", event.target.checked)}
          className="mt-1 size-4 rounded border-piatto-line accent-piatto-terracotta"
        />
        <span>
          Ich möchte Updates zur Piatto Beta erhalten und stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. *
        </span>
      </label>

      <p className="mt-3 text-xs leading-5 text-piatto-muted">
        Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in der{" "}
        <a href="/datenschutz" className="font-semibold text-piatto-olive underline underline-offset-4">
          Datenschutzerklärung
        </a>
        .
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isLoading}
          className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-piatto-terracotta px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(217,108,59,0.24)] transition hover:bg-[#C96035] disabled:opacity-70 sm:w-auto"
        >
          {isLoading ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
          {isLoading ? "Wird gespeichert" : "Zur Waitlist"}
        </button>
        <p
          id="waitlist-status"
          aria-live="polite"
          className={cn(
            "min-h-6 text-sm leading-6",
            isPositive ? "font-semibold text-piatto-olive" : isError ? "font-semibold text-red-700" : "text-piatto-muted",
          )}
        >
          {isPositive ? <CheckCircle2 className="mr-1 inline size-4 align-[-2px]" aria-hidden="true" /> : null}
          {message}
        </p>
      </div>
    </form>
  );
}
