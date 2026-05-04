-- Piatto Landingpage Waitlist.
-- Run this in the Supabase SQL editor before using /api/waitlist.
-- Inserts are performed only by the server-side API route with SUPABASE_SERVICE_ROLE_KEY.
-- No public SELECT policy is created.

create extension if not exists pgcrypto;

create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  email_normalized text not null unique,
  full_name text,
  city text default 'Mainz',
  role text not null check (role in ('guest', 'restaurant', 'creator')),
  restaurant_name text,
  website_url text,
  social_handle text,
  message text,
  consent_marketing boolean not null default false,
  consent_text_version text not null default 'waitlist_v1',
  consent_given_at timestamptz,
  double_opt_in_status text not null default 'pending',
  double_opt_in_sent_at timestamptz,
  double_opt_in_confirmed_at timestamptz,
  source text not null default 'landingpage',
  referrer text,
  user_agent text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists waitlist_signups_role_idx
on public.waitlist_signups(role);

create index if not exists waitlist_signups_created_at_idx
on public.waitlist_signups(created_at desc);

alter table public.waitlist_signups enable row level security;

revoke all on public.waitlist_signups from anon;
revoke all on public.waitlist_signups from authenticated;

comment on table public.waitlist_signups is
  'Private Piatto landingpage waitlist. Written by server-side API only.';
