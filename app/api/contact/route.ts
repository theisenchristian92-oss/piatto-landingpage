import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ContactTopic = "general" | "restaurant" | "creator" | "press" | "privacy" | "other";

type ContactInput = {
  email: string;
  emailNormalized: string;
  fullName: string | null;
  topic: ContactTopic;
  message: string;
  consentContact: true;
  referrer: string | null;
};

type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; status: number; error: "validation_error" };

const topics = new Set<ContactTopic>(["general", "restaurant", "creator", "press", "privacy", "other"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "validation_error" }, { status: 400 });
  }

  const parsed = parseContactBody(body);

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: parsed.status });
  }

  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "").replace(/\/+$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  const input = parsed.data;
  const now = new Date().toISOString();

  const payload = {
    email: input.email,
    email_normalized: input.emailNormalized,
    full_name: input.fullName,
    topic: input.topic,
    message: input.message,
    consent_contact: input.consentContact,
    consent_text_version: "contact_v1",
    consent_given_at: now,
    source: "contact_page",
    referrer: input.referrer ?? trimOptional(request.headers.get("referer"), 500),
    user_agent: trimOptional(request.headers.get("user-agent"), 500),
  };

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
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

    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}

function parseContactBody(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, status: 400, error: "validation_error" };
  }

  const source = body as Record<string, unknown>;
  const emailNormalized = typeof source.email === "string" ? source.email.trim().toLowerCase() : "";
  const topic = typeof source.topic === "string" && topics.has(source.topic as ContactTopic) ? (source.topic as ContactTopic) : null;
  const message = normalizeRequiredText(source.message, 3000);
  const consentContact = source.consentContact === true || source.consent_contact === true;

  if (!emailPattern.test(emailNormalized) || !topic || !message || !consentContact) {
    return { ok: false, status: 400, error: "validation_error" };
  }

  return {
    ok: true,
    data: {
      email: emailNormalized,
      emailNormalized,
      fullName: normalizeText(source.fullName ?? source.full_name ?? source.name, 120),
      topic,
      message,
      consentContact: true,
      referrer: normalizeText(source.referrer, 500),
    },
  };
}

function normalizeRequiredText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function trimOptional(value: string | null, maxLength: number) {
  if (!value) return null;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}
