"use client";

import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const contactTopics = [
  { value: "general", label: "Allgemeine Anfrage" },
  { value: "restaurant", label: "Restaurant" },
  { value: "creator", label: "Creator" },
  { value: "press", label: "Presse" },
  { value: "privacy", label: "Datenschutz" },
  { value: "other", label: "Sonstiges" },
] as const;

type ContactTopic = (typeof contactTopics)[number]["value"];

type FormState = {
  fullName: string;
  email: string;
  topic: ContactTopic;
  message: string;
  consentContact: boolean;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  fullName: "",
  email: "",
  topic: "general",
  message: "",
  consentContact: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("Wir melden uns so schnell wie möglich zurück.");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const updateForm = <Key extends keyof FormState>(key: Key, value: FormState[Key]) => {
    setForm((current) => ({ ...current, [key]: value }));

    if (submitState !== "loading") {
      setSubmitState("idle");
      setStatusMessage("Wir melden uns so schnell wie möglich zurück.");
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = form.email.trim().toLowerCase();
    const trimmedMessage = form.message.trim();

    if (!emailPattern.test(normalizedEmail)) {
      setSubmitState("error");
      setStatusMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      emailRef.current?.focus();
      return;
    }

    if (!trimmedMessage) {
      setSubmitState("error");
      setStatusMessage("Bitte schreiben Sie eine kurze Nachricht.");
      messageRef.current?.focus();
      return;
    }

    if (!form.consentContact) {
      setSubmitState("error");
      setStatusMessage("Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.");
      return;
    }

    setSubmitState("loading");
    setStatusMessage("Ihre Nachricht wird gesendet.");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: normalizedEmail,
          fullName: form.fullName,
          topic: form.topic,
          message: trimmedMessage,
          consentContact: form.consentContact,
          referrer: document.referrer || null,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string; status?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "request_failed");
      }

      setSubmitState("success");
      setStatusMessage("Danke. Ihre Nachricht wurde gesendet.");
      setForm(initialFormState);
    } catch {
      setSubmitState("error");
      setStatusMessage("Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns per E-Mail.");
    }
  };

  const isLoading = submitState === "loading";
  const isSuccess = submitState === "success";
  const isError = submitState === "error";

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-[1.5rem] border border-piatto-line bg-white p-4 shadow-piatto sm:p-6"
    >
      <div className="flex items-start gap-3 border-b border-piatto-line pb-5">
        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-piatto-terracotta text-white shadow-[0_12px_24px_rgba(217,108,59,0.22)]">
          <Mail className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-semibold leading-tight text-piatto-ink">Nachricht senden</h2>
          <p className="mt-2 text-sm leading-6 text-piatto-muted">Für Beta-Fragen, Presse, Restaurants und Creator.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-piatto-ink">Name</span>
          <input
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => updateForm("fullName", event.target.value)}
            placeholder="Optional"
            className="focus-ring mt-2 h-12 w-full rounded-2xl border border-piatto-line bg-[#FFFCF8] px-3 text-base shadow-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-piatto-ink">E-Mail *</span>
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
            aria-describedby="contact-status"
            className="focus-ring mt-2 h-12 w-full rounded-2xl border border-piatto-line bg-[#FFFCF8] px-3 text-base shadow-sm"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-piatto-ink">Anliegen *</span>
          <select
            required
            value={form.topic}
            onChange={(event) => updateForm("topic", event.target.value as ContactTopic)}
            className="focus-ring mt-2 h-12 w-full rounded-2xl border border-piatto-line bg-[#FFFCF8] px-3 text-base shadow-sm"
          >
            {contactTopics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-piatto-ink">Nachricht *</span>
          <textarea
            ref={messageRef}
            required
            rows={6}
            value={form.message}
            onChange={(event) => updateForm("message", event.target.value)}
            placeholder="Worum geht es?"
            aria-invalid={isError}
            aria-describedby="contact-status"
            className="focus-ring mt-2 w-full resize-y rounded-2xl border border-piatto-line bg-[#FFFCF8] px-3 py-3 text-base leading-7 shadow-sm"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-piatto-line bg-[#FFFCF8] p-3 text-sm leading-6 text-piatto-muted shadow-sm">
        <input
          type="checkbox"
          required
          checked={form.consentContact}
          onChange={(event) => updateForm("consentContact", event.target.checked)}
          className="mt-1 size-4 rounded border-piatto-line accent-piatto-terracotta"
        />
        <span>Ich stimme zu, dass Piatto meine Angaben zur Bearbeitung meiner Anfrage verarbeitet. *</span>
      </label>

      <p className="mt-3 text-xs leading-5 text-piatto-muted">
        Weitere Informationen finden Sie in der{" "}
        <a href="/datenschutz" className="font-semibold text-piatto-olive underline underline-offset-4 focus-ring">
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
          {isLoading ? "Wird gesendet" : "Nachricht senden"}
        </button>
        <p
          id="contact-status"
          aria-live="polite"
          className={cn(
            "min-h-6 text-sm leading-6",
            isSuccess ? "font-semibold text-piatto-olive" : isError ? "font-semibold text-red-700" : "text-piatto-muted",
          )}
        >
          {isSuccess ? <CheckCircle2 className="mr-1 inline size-4 align-[-2px]" aria-hidden="true" /> : null}
          {isError ? <AlertCircle className="mr-1 inline size-4 align-[-2px]" aria-hidden="true" /> : null}
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
