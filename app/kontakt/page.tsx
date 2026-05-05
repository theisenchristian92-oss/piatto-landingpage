import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Mail, MessageSquare, ShieldCheck, Sparkles, Store, UsersRound } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/landing/footer";
import { PiattoLogo } from "@/components/landing/logo";
import { metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Kontakt | Piatto",
  description: "Kontakt zu Piatto für Gäste, Restaurants, Creator, Presse und Datenschutzanfragen.",
  path: "/kontakt",
});

const badges = ["Gäste", "Restaurants", "Creator", "Presse"];

const contactCards = [
  {
    title: "Allgemeine Anfragen",
    text: "Für Fragen zur Piatto Beta, Partnerschaften oder Feedback.",
    href: "mailto:kontakt@piatto.world",
    action: "kontakt@piatto.world",
    icon: MessageSquare,
  },
  {
    title: "Restaurants",
    text: "Für Restaurants, die ihre Gerichte sichtbar machen möchten.",
    href: "/#waitlist",
    action: "Restaurant vormerken",
    icon: Store,
  },
  {
    title: "Creator",
    text: "Für Food-Creator, die die Mainz Beta begleiten möchten.",
    href: "/#waitlist",
    action: "Als Creator vormerken",
    icon: UsersRound,
  },
  {
    title: "Datenschutz",
    text: "Für Auskunft, Löschung oder Widerruf Ihrer Daten.",
    href: "mailto:kontakt@piatto.world",
    action: "kontakt@piatto.world",
    icon: ShieldCheck,
  },
];

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#FFFAF3] text-piatto-ink">
      <header className="sticky top-0 z-40 border-b border-piatto-line/70 bg-[#fffaf3]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Piatto Startseite" className="focus-ring rounded-md">
            <PiattoLogo className="text-lg sm:text-xl" />
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-semibold text-piatto-muted" aria-label="Kontakt Navigation">
            <Link href="/" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Startseite
            </Link>
            <Link href="/#waitlist" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Waitlist
            </Link>
          </nav>
        </div>
      </header>

      <section className="piatto-texture px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-piatto-line bg-white/72 px-3 py-1.5 text-sm font-semibold text-piatto-olive shadow-sm">
              <Sparkles className="size-4 text-piatto-terracotta" aria-hidden="true" />
              Piatto Sneak Preview
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-piatto-ink sm:text-5xl lg:text-6xl">
              Kontakt zu Piatto
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-piatto-muted">
              Sie möchten bei der Mainz Beta dabei sein, ein Restaurant vorschlagen oder mit Piatto sprechen? Schreiben Sie uns.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-piatto-line bg-white/72 px-3 py-1.5 text-sm font-semibold text-piatto-muted shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-piatto-line bg-white/78 p-5 shadow-piatto backdrop-blur">
            <Mail className="size-6 text-piatto-terracotta" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-piatto-olive">Direkt per E-Mail</p>
            <a href="mailto:kontakt@piatto.world" className="focus-ring mt-2 block rounded-md text-2xl font-semibold leading-tight text-piatto-ink transition hover:text-piatto-terracotta">
              kontakt@piatto.world
            </a>
            <p className="mt-3 text-sm leading-6 text-piatto-muted">Für Presse und Datenschutz wählen Sie im Formular einfach das passende Anliegen.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="rounded-[1.25rem] border border-piatto-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-piatto">
                <div className="grid size-11 place-items-center rounded-2xl bg-piatto-cream text-piatto-olive">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-tight text-piatto-ink">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-piatto-muted">{card.text}</p>
                <LinkOrAnchor href={card.href} className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-piatto-terracotta transition hover:text-[#C96035]">
                  {card.action}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </LinkOrAnchor>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.64fr)_minmax(24rem,0.9fr)] lg:items-start">
          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">Kontaktformular</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-piatto-ink sm:text-4xl">
              Kurz schreiben, sauber einordnen, persönlich antworten.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-piatto-muted">
              Ihre Anfrage wird getrennt von der Waitlist gespeichert und nur zur Bearbeitung Ihrer Nachricht verwendet.
            </p>
            <div className="mt-6 rounded-[1.25rem] border border-piatto-line bg-piatto-card p-4 text-sm leading-6 text-piatto-muted">
              Datenschutzanfragen laufen vorerst über <span className="font-semibold text-piatto-ink">kontakt@piatto.world</span>.
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.5rem] bg-piatto-ink p-6 text-white shadow-[0_24px_70px_rgba(31,33,26,0.22)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Sie möchten die Beta testen?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">Für Gäste, Restaurants und Creator ist die Waitlist der richtige Einstieg.</p>
          </div>
          <Link href="/#waitlist" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-piatto-terracotta px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(217,108,59,0.24)] transition hover:bg-[#C96035]">
            Zur Waitlist
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function LinkOrAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
