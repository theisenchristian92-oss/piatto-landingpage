"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PiattoLogo } from "./logo";
import { WaitlistJumpButton } from "./waitlist-form";

const navItems = [
  { label: "Idee", href: "/#idee" },
  { label: "Beta", href: "/#mainz" },
  { label: "Waitlist", href: "/#waitlist" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-piatto-line/70 bg-[#fffaf3]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="/" aria-label="Piatto Startseite" className="focus-ring rounded-md">
          <PiattoLogo className="text-lg sm:text-xl" />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-piatto-line/80 bg-white/64 p-1 text-sm font-semibold text-piatto-muted shadow-sm lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-piatto-cream/75 hover:text-piatto-ink focus-ring">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WaitlistJumpButton className="hidden sm:inline-flex" compact>
            Waitlist
          </WaitlistJumpButton>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="focus-ring inline-grid size-11 place-items-center rounded-full border border-piatto-line bg-white text-piatto-ink shadow-sm lg:hidden"
          >
            <span className="sr-only">Navigation öffnen</span>
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-piatto-line bg-[#fffaf3]/96 px-5 py-4 backdrop-blur lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-2 text-sm font-semibold text-piatto-muted" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-2 py-2 transition hover:bg-white hover:text-piatto-ink"
            >
              {item.label}
            </a>
          ))}
          <WaitlistJumpButton className="mt-2 w-full" compact>
            Zur Waitlist
          </WaitlistJumpButton>
        </nav>
      </div>
    </header>
  );
}
