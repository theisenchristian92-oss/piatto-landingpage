import type { Metadata } from "next";
import Link from "next/link";
import { PiattoLogo } from "@/components/landing/logo";

export const metadata: Metadata = {
  title: "Impressum | Piatto",
  description: "Impressum und Anbieterangaben fuer die Piatto Landingpage.",
};

const todoClass =
  "mt-4 rounded-lg border border-piatto-terracotta/25 bg-piatto-card px-4 py-3 text-sm leading-6 text-piatto-muted";

function TodoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className={todoClass}>
      <p className="font-semibold text-piatto-terracotta">TODO vor Public Launch</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-piatto-line pt-8">
      <h2 className="text-xl font-semibold tracking-tight text-piatto-ink">{title}</h2>
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
            Angaben nach § 5 DDG
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-piatto-ink sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-piatto-muted sm:text-lg">
            Diese Seite enthält die Anbieterangaben für Piatto im aktuellen Beta- und Waitlist-Stand. Rechtlich offene
            Punkte sind bewusst als Platzhalter gekennzeichnet und müssen vor dem Public Launch final ergänzt werden.
          </p>

          <div className="mt-12 space-y-10">
            <LegalSection title="Anbieter">
              <address className="not-italic">
                <p className="font-semibold text-piatto-ink">Piatto</p>
                <p>[Name / Firma ergänzen]</p>
                <p>[Rechtsform ergänzen, falls vorhanden]</p>
                <p>[Adresse ergänzen]</p>
                <p>[PLZ Ort ergänzen]</p>
                <p>Deutschland</p>
              </address>

              <TodoNote>
                <p>Finalen Anbieter vor Public Launch ergänzen.</p>
                <p>
                  Falls Piatto noch privat betrieben wird, muss hier die verantwortliche natürliche Person mit
                  ladungsfähiger Anschrift stehen.
                </p>
                <p>
                  Falls Piatto als UG oder GmbH gegründet ist, muss die vollständige Firma inklusive Rechtsform stehen.
                </p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Vertreten durch">
              <p>[Nur aufnehmen, wenn eine Gesellschaft besteht]</p>
              <p>[Vorname Nachname]</p>
              <p>[Funktion ergänzen, z. B. Geschäftsführer]</p>

              <TodoNote>
                <p>Vertretungsberechtigte Person final ergänzen.</p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Kontakt">
              <div>
                <p className="font-semibold text-piatto-ink">E-Mail</p>
                <p>[kontakt@piatto.world ergänzen]</p>
              </div>
              <div>
                <p className="font-semibold text-piatto-ink">Telefon</p>
                <p>[Telefonnummer ergänzen]</p>
              </div>

              <TodoNote>
                <p>
                  Eine E-Mail-Adresse allein kann unzureichend sein. Telefonnummer oder geeigneten Kontaktweg vor Public
                  Launch rechtlich prüfen und final ergänzen.
                </p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Registereintrag">
              <p>[Nur aufnehmen, wenn Piatto bereits im Handelsregister eingetragen ist]</p>
              <div>
                <p className="font-semibold text-piatto-ink">Registergericht</p>
                <p>[Amtsgericht ergänzen]</p>
              </div>
              <div>
                <p className="font-semibold text-piatto-ink">Registernummer</p>
                <p>[HRB ergänzen]</p>
              </div>

              <TodoNote>
                <p>
                  Handelsregisterstatus prüfen. Keine UG/GmbH oder Eintragung behaupten, wenn Piatto noch nicht
                  gegründet oder nicht eingetragen ist.
                </p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Umsatzsteuer-ID">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
              <p>[USt-IdNr. ergänzen]</p>

              <TodoNote>
                <p>Nur veröffentlichen, wenn eine Umsatzsteuer-ID tatsächlich vorhanden ist. Andernfalls Abschnitt entfernen.</p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Verantwortlich für Inhalte">
              <p>[Name ergänzen]</p>
              <p>[Adresse ergänzen]</p>

              <TodoNote>
                <p>Prüfen, ob ein Hinweis nach Medienstaatsvertrag erforderlich ist.</p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Verbraucherstreitbeilegung">
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <TodoNote>
                <p>Vor Public Launch rechtlich prüfen, ob diese Formulierung für Piatto passt.</p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Haftung für Inhalte">
              <p>
                Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung von Informationen nach den allgemeinen Gesetzen bleiben
                unberührt.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Links">
              <p>
                Diese Website enthält aktuell keine redaktionell gesetzten externen Links. Falls später externe Links
                ergänzt werden, werden deren Ziele vor Veröffentlichung sorgfältig geprüft.
              </p>

              <TodoNote>
                <p>Nur beibehalten oder erweitern, wenn auf der Website externe Links verwendet werden.</p>
              </TodoNote>
            </LegalSection>

            <LegalSection title="Urheberrecht">
              <p>
                Texte, Gestaltung, Marke und Inhalte dieser Website unterliegen dem Urheberrecht. Fremde Inhalte dürfen
                nur verwendet werden, wenn die erforderlichen Rechte vorliegen.
              </p>
            </LegalSection>

            <LegalSection title="Bildnachweise">
              <p>[Eigene Bilder / lizenzierte Bilder / Platzhalter ergänzen]</p>

              <TodoNote>
                <p>Vor Public Launch alle verwendeten Bilder und Rechte prüfen.</p>
              </TodoNote>
            </LegalSection>
          </div>
        </article>
      </div>
    </main>
  );
}
