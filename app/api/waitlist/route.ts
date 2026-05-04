import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type WaitlistRole = "guest" | "restaurant" | "creator";

type ValidationResult =
  | { ok: true; data: WaitlistInput }
  | { ok: false; status: number; error: "validation_error" | "bot_detected" };

type WaitlistInput = {
  email: string;
  emailNormalized: string;
  role: WaitlistRole;
  fullName: string | null;
  city: string;
  restaurantName: string | null;
  websiteUrl: string | null;
  socialHandle: string | null;
  message: string | null;
  consentMarketing: true;
  company: string | null;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
};

const roles = new Set<WaitlistRole>(["guest", "restaurant", "creator"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "validation_error" }, { status: 400 });
  }

  const parsed = parseWaitlistBody(body);

  if (!parsed.ok) {
    if (parsed.error === "bot_detected") {
      return NextResponse.json({ ok: true, status: "created" }, { status: 201 });
    }

    return NextResponse.json({ ok: false, error: parsed.error }, { status: parsed.status });
  }

  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "").replace(/\/+$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ ok: false, error: "server_config_missing" }, { status: 500 });
  }

  const input = parsed.data;
  const userAgent = trimOptional(request.headers.get("user-agent"), 500);
  const headerReferrer = trimOptional(request.headers.get("referer"), 500);
  const now = new Date().toISOString();

  const payload = {
    email: input.email,
    email_normalized: input.emailNormalized,
    full_name: input.fullName,
    city: input.city,
    role: input.role,
    restaurant_name: input.role === "restaurant" ? input.restaurantName : null,
    website_url: input.role === "restaurant" ? input.websiteUrl : null,
    social_handle: input.role === "creator" ? input.socialHandle : null,
    message: input.message,
    consent_marketing: input.consentMarketing,
    consent_text_version: "waitlist_v1",
    consent_given_at: now,
    double_opt_in_status: "pending",
    source: "landingpage",
    referrer: input.referrer ?? headerReferrer,
    user_agent: userAgent,
    utm_source: input.utmSource,
    utm_medium: input.utmMedium,
    utm_campaign: input.utmCampaign,
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/waitlist_signups`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true, status: "created" }, { status: 201 });
    }

    const error = await readSupabaseError(response);

    if (response.status === 409 || error.code === "23505" || error.message.toLowerCase().includes("duplicate")) {
      return NextResponse.json({ ok: true, status: "already_exists" });
    }

    return NextResponse.json({ ok: false, error: "supabase_insert_failed" }, { status: 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "supabase_insert_failed" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}

function parseWaitlistBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "validation_error" };
  }

  const source = body as Record<string, unknown>;
  const emailNormalized = typeof source.email === "string" ? source.email.trim().toLowerCase() : "";
  const role = typeof source.role === "string" && roles.has(source.role as WaitlistRole) ? (source.role as WaitlistRole) : null;
  const consentMarketing = source.consentMarketing === true || source.consent_marketing === true;
  const company = normalizeText(source.company, 120);

  if (company) {
    return { ok: false, status: 200, error: "bot_detected" };
  }

  if (!emailPattern.test(emailNormalized) || !role || !consentMarketing) {
    return { ok: false, status: 400, error: "validation_error" };
  }

  return {
    ok: true,
    data: {
      email: emailNormalized,
      emailNormalized,
      role,
      fullName: normalizeText(source.fullName ?? source.full_name ?? source.name, 120),
      city: normalizeText(source.city, 80) ?? "Mainz",
      restaurantName: normalizeText(source.restaurantName ?? source.restaurant_name, 140),
      websiteUrl: normalizeWebsite(source.websiteUrl ?? source.website_url ?? source.website),
      socialHandle: normalizeText(source.socialHandle ?? source.social_handle, 120),
      message: normalizeText(source.message, 1000),
      consentMarketing: true,
      company,
      referrer: normalizeText(source.referrer, 500),
      utmSource: normalizeText(source.utmSource ?? source.utm_source, 120),
      utmMedium: normalizeText(source.utmMedium ?? source.utm_medium, 120),
      utmCampaign: normalizeText(source.utmCampaign ?? source.utm_campaign, 120),
    },
  };
}

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function normalizeWebsite(value: unknown) {
  const text = normalizeText(value, 300);
  if (!text) return null;

  if (/^https?:\/\//i.test(text)) {
    return text;
  }

  return `https://${text}`;
}

function trimOptional(value: string | null, maxLength: number) {
  if (!value) return null;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

async function readSupabaseError(response: Response) {
  try {
    const error = (await response.json()) as { code?: unknown; message?: unknown };

    return {
      code: typeof error.code === "string" ? error.code : "",
      message: typeof error.message === "string" ? error.message : "",
    };
  } catch {
    return { code: "", message: "" };
  }
}
