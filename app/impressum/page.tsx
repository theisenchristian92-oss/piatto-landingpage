import type { Metadata } from "next";
import Link from "next/link";
import { PiattoLogo } from "@/components/landing/logo";

export const metadata: Metadata = {
  title: "Impressum | Piatto",
  description: "Impressum und Anbieterangaben fuer die Piatto Landingpage.",
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-piatto-line pt-8">
      <h2 className="text-xl font-semibold tracking-tight text-piatto-olive">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-piatto-muted">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] px-5 py-8 text-piatto-ink sm:px-8 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-col gap-5 border-b border-piatto-line pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="focus-ring inline-block rounded-md" aria-label="Zur Piatto Startseite">
            <PiattoLogo className="text-lg" />
          </Link>

          <nav className="flex flex-wrap gap-3 text-sm font-semibold text-piatto-muted" aria-label="Seitennavigation">
            <Link href="/" className="focus-ring rounded-md transition hover:text-piatto-ink">
              Zur Startseite
            </Link>
            <Link href="/datenschutz" className="focus-ring rounded-md transition hover:text-piatto-ink">
              Datenschutzerklärung
            </Link>
          </nav>
        </header>

        <article className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-piatto-olive sm:text-5xl">
            Impressum
          </h1>

          <div className="mt-12 space-y-10">
            <LegalSection title="Anbieter">
              <address className="not-italic">
                <p className="font-semibold text-piatto-ink">Christian Theisen</p>
                <p>Mainstraße 15</p>
                <p>61440 Oberursel</p>
                <p>Deutschland</p>
              </address>
            </LegalSection>

            <LegalSection title="Kontakt">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@piatto.world"
                  className="font-semibold text-piatto-olive underline decoration-piatto-terracotta/40 underline-offset-4 transition hover:text-piatto-ink focus-ring"
                >
                  kontakt@piatto.world
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Verantwortlich für Inhalte nach § 18 Abs. 2 MStV">
              <address className="not-italic">
                <p className="font-semibold text-piatto-ink">Christian Theisen</p>
                <p>Mainstraße 15</p>
                <p>61440 Oberursel</p>
                <p>Deutschland</p>
              </address>
            </LegalSection>

            <LegalSection title="Verbraucherstreitbeilegung">
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Inhalte">
              <p>
                Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte übernehmen wir keine Gewähr.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung von Informationen nach den allgemeinen Gesetzen bleiben
                unberührt.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Links">
              <p>
                Diese Website kann Links zu externen Websites enthalten. Auf deren Inhalte haben wir keinen Einfluss.
                Für externe Inhalte ist der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </LegalSection>

            <LegalSection title="Urheberrecht">
              <p>
                Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede
                Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen Zustimmung des jeweiligen
                Rechteinhabers.
              </p>
            </LegalSection>

            <LegalSection title="Bildnachweise">
              <p>
                Die auf dieser Website verwendeten Bilder stammen aus eigenen Quellen, wurden für Piatto erstellt oder
                werden als Platzhalter im Rahmen der Beta-Kommunikation verwendet. Vor einer erweiterten öffentlichen
                Nutzung müssen Bildrechte final geprüft werden.
              </p>
            </LegalSection>
          </div>
        </article>
      </div>
    </main>
  );
}
