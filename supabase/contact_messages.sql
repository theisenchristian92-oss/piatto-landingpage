-- Run this in the Supabase SQL editor before using /api/contact.
-- Inserts are performed only by the server-side API route with SUPABASE_SERVICE_ROLE_KEY.

create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  email_normalized text not null,
  full_name text,
  topic text not null check (topic in ('general', 'restaurant', 'creator', 'press', 'privacy', 'other')),
  message text not null,
  consent_contact boolean not null default false,
  consent_text_version text not null default 'contact_v1',
  consent_given_at timestamptz,
  source text not null default 'contact_page',
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
on public.contact_messages(created_at desc);

create index if not exists contact_messages_topic_idx
on public.contact_messages(topic);

alter table public.contact_messages enable row level security;

revoke all on public.contact_messages from anon;
revoke all on public.contact_messages from authenticated;

grant select, insert, update on public.contact_messages to service_role;

comment on table public.contact_messages is
  'Private Piatto contact messages. Written by server-side API only.';
