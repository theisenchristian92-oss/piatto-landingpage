import type { Metadata } from "next";
import Link from "next/link";
import { PiattoLogo } from "@/components/landing/logo";
import { metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Datenschutzerklärung | Piatto",
  description: "Datenschutzhinweise für die Piatto Landingpage und Waitlist zur Beta.",
  path: "/datenschutz",
});

const sections = [
  { id: "kurzueberblick", label: "1. Kurzüberblick" },
  { id: "verantwortlicher", label: "2. Verantwortlicher" },
  { id: "datenschutzanfragen", label: "3. Datenschutzanfragen" },
  { id: "websitebesuch", label: "4. Besuch der Website" },
  { id: "hosting", label: "5. Hosting über Vercel" },
  { id: "waitlist", label: "6. Waitlist und Beta" },
  { id: "double-opt-in", label: "7. Double Opt-in" },
  { id: "supabase", label: "8. Speicherung in Supabase" },
  { id: "e-mail-versand", label: "9. E-Mail-Versand" },
  { id: "cookies-tracking", label: "10. Cookies und Tracking" },
  { id: "speicherdauer", label: "11. Speicherdauer" },
  { id: "empfaenger", label: "12. Empfänger" },
  { id: "drittlanduebermittlung", label: "13. Drittlandübermittlung" },
  { id: "rechte", label: "14. Ihre Rechte" },
  { id: "bereitstellung", label: "15. Pflicht zur Bereitstellung" },
  { id: "minderjaehrige", label: "16. Minderjährige" },
  { id: "aenderungen", label: "17. Änderungen" },
];

const websiteData = [
  "IP-Adresse",
  "Datum und Uhrzeit des Abrufs",
  "aufgerufene Seiten und Dateien",
  "Browsertyp und Browserversion",
  "Betriebssystem",
  "Referrer-URL",
  "technische Server-Logdaten",
];

const waitlistData = [
  "E-Mail-Adresse",
  "Rolle, falls ausgewählt",
  "Stadt oder Beta-Bezug, falls technisch gespeichert",
  "Einwilligungsstatus",
  "Zeitpunkt der Eintragung",
  "technische Metadaten, falls gespeichert, zum Beispiel User-Agent, Referrer oder UTM-Parameter",
];

const waitlistPurposes = [
  "Aufnahme in die Piatto Waitlist",
  "Kontaktaufnahme zur Beta",
  "Versand einzelner Beta-Informationen",
  "Planung und Auswertung der frühen Beta-Nachfrage",
  "Nachweis der erteilten Einwilligung",
];

const recipients = [
  "Hosting-Anbieter",
  "Datenbankanbieter",
  "technische Dienstleister für Betrieb, Wartung und Sicherheit",
  "E-Mail-Dienstleister, falls künftig angebunden",
];

const dataSubjectRights = [
  "Auskunft über Ihre gespeicherten personenbezogenen Daten",
  "Berichtigung unrichtiger Daten",
  "Löschung personenbezogener Daten",
  "Einschränkung der Verarbeitung",
  "Datenübertragbarkeit",
  "Widerspruch gegen bestimmte Verarbeitungen",
  "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft",
  "Beschwerde bei einer Datenschutzaufsichtsbehörde",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-piatto-line pt-9">
      <h2 className="text-2xl font-semibold leading-tight text-piatto-olive">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-piatto-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-piatto-terracotta">
          {item}
        </li>
      ))}
    </ul>
  );
}

function AddressBlock({ children }: { children: React.ReactNode }) {
  return (
    <address className="not-italic text-piatto-ink">
      <div className="space-y-1">{children}</div>
    </address>
  );
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#FFFAF3] text-piatto-ink">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-5 border-b border-piatto-line pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="focus-ring inline-flex w-fit rounded-md" aria-label="Zur Startseite">
            <PiattoLogo className="text-lg" />
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-piatto-muted" aria-label="Rechtliches">
            <Link href="/" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Startseite
            </Link>
            <Link href="/impressum" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Impressum
            </Link>
          </nav>
        </header>

        <div className="mx-auto max-w-3xl py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">Piatto Beta</p>
          <h1 className="mt-4 break-words text-3xl font-semibold leading-tight text-piatto-olive sm:text-5xl">
            Datenschutz<wbr />
            erklärung
          </h1>
          <p className="mt-5 text-base leading-8 text-piatto-muted">Stand: 4. Mai 2026</p>

          <div className="mt-8 rounded-lg border border-piatto-line bg-white px-5 py-5 shadow-piatto sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-piatto-terracotta">Inhalt</p>
            <nav className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-piatto-muted sm:grid-cols-2" aria-label="Inhaltsverzeichnis">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-md py-1 transition hover:text-piatto-ink focus-ring">
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <article className="mt-10 space-y-10">
            <Section id="kurzueberblick" title="1. Kurzüberblick">
              <p>
                Piatto ist eine dish-first Food-Discovery-Plattform im Beta-Aufbau. Diese Website dient aktuell vor
                allem dazu, über Piatto zu informieren und frühe Interessenten für die Beta-Waitlist zu sammeln.
              </p>
              <p>
                Dabei verarbeiten wir insbesondere technische Daten beim Besuch der Website sowie Daten, die Sie
                freiwillig über das Waitlist-Formular oder bei einer Kontaktaufnahme angeben.
              </p>
            </Section>

            <Section id="verantwortlicher" title="2. Verantwortlicher">
              <AddressBlock>
                <p className="font-semibold">Christian Theisen</p>
                <p>In der Krummgewann 16</p>
                <p>55597 Wöllstein</p>
                <p>Deutschland</p>
              </AddressBlock>
              <p>
                E-Mail:{" "}
                <a href="mailto:kontakt@piatto.world" className="font-semibold text-piatto-olive underline underline-offset-4">
                  kontakt@piatto.world
                </a>
              </p>
            </Section>

            <Section id="datenschutzanfragen" title="3. Kontakt für Datenschutzanfragen">
              <p>Für Datenschutzanfragen erreichen Sie uns unter:</p>
              <p>
                <a href="mailto:kontakt@piatto.world" className="font-semibold text-piatto-olive underline underline-offset-4">
                  kontakt@piatto.world
                </a>
              </p>
            </Section>

            <Section id="websitebesuch" title="4. Besuch der Website">
              <p>Beim Aufruf dieser Website können technische Daten verarbeitet werden. Dazu können insbesondere gehören:</p>
              <BulletList items={websiteData} />
              <p>
                Die Verarbeitung erfolgt, um die Website technisch bereitzustellen, die Sicherheit zu gewährleisten,
                Fehler zu analysieren und Missbrauch zu verhindern.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und
                zuverlässigen Betrieb dieser Website.
              </p>
            </Section>

            <Section id="hosting" title="5. Hosting über Vercel">
              <p>Diese Website wird über Vercel bereitgestellt.</p>
              <div>
                <p className="font-semibold text-piatto-ink">Anbieter:</p>
                <AddressBlock>
                  <p>Vercel Inc.</p>
                  <p>440 N Barranca Ave #4133</p>
                  <p>Covina, CA 91723</p>
                  <p>USA</p>
                </AddressBlock>
              </div>
              <p>
                Beim Betrieb der Website kann Vercel technische Daten verarbeiten, insbesondere Server-Logdaten und
                Zugriffsdaten. Vercel betreibt eine globale Infrastruktur. Dabei können Daten auch außerhalb der EU oder
                des EWR verarbeitet werden.
              </p>
              <p>Weitere Informationen stellt Vercel in seinen Datenschutz- und Sicherheitsinformationen bereit.</p>
            </Section>

            <Section id="waitlist" title="6. Waitlist und Beta-Registrierung">
              <p>Wenn Sie sich in die Piatto Waitlist eintragen, verarbeiten wir die Daten, die Sie im Formular angeben.</p>
              <div>
                <p className="font-semibold text-piatto-ink">Aktuell können insbesondere folgende Daten verarbeitet werden:</p>
                <BulletList items={waitlistData} />
              </div>
              <div>
                <p className="font-semibold text-piatto-ink">Zwecke der Verarbeitung:</p>
                <BulletList items={waitlistPurposes} />
              </div>
              <p>
                Rechtsgrundlage für die Kontaktaufnahme und Beta-Informationen ist Art. 6 Abs. 1 lit. a DSGVO, also
                Ihre Einwilligung.
              </p>
              <p>
                Für die technische Speicherung, Missbrauchsprävention und den Nachweis der Einwilligung stützen wir uns
                ergänzend auf Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Schreiben Sie dafür eine
                E-Mail an{" "}
                <a href="mailto:kontakt@piatto.world" className="font-semibold text-piatto-olive underline underline-offset-4">
                  kontakt@piatto.world
                </a>
                .
              </p>
            </Section>

            <Section id="double-opt-in" title="7. Double Opt-in">
              <p>
                Ein automatisiertes Double-Opt-in-Verfahren ist aktuell noch nicht aktiv. Wenn künftig regelmäßige
                Newsletter oder wiederkehrende Marketing-E-Mails versendet werden, wird hierfür ein geeignetes
                Einwilligungs- und Bestätigungsverfahren eingerichtet, soweit dies erforderlich ist.
              </p>
            </Section>

            <Section id="supabase" title="8. Speicherung in Supabase">
              <p>Für die Speicherung der Waitlist-Daten nutzen wir Supabase als technische Datenbanklösung.</p>
              <div>
                <p className="font-semibold text-piatto-ink">Anbieter:</p>
                <AddressBlock>
                  <p>Supabase Inc.</p>
                  <p>970 Toa Payoh North #07-04</p>
                  <p>Singapore 318992</p>
                  <p>Singapore</p>
                </AddressBlock>
              </div>
              <p>
                Supabase kann personenbezogene Daten als technischer Dienstleister verarbeiten. Die konkret gewählte
                Projektregion richtet sich nach der technischen Konfiguration des Supabase-Projekts.
              </p>
              <p>
                Verarbeitete Daten können insbesondere die im Waitlist-Formular angegebenen Daten sowie technische
                Metadaten umfassen.
              </p>
              <p>Zweck der Nutzung von Supabase ist die sichere technische Speicherung und Verwaltung der Waitlist-Daten.</p>
            </Section>

            <Section id="e-mail-versand" title="9. E-Mail-Versand">
              <p>
                Ein externer E-Mail-Dienstleister für regelmäßige Newsletter oder automatisierte Beta-Mails ist aktuell
                nicht aktiv angebunden.
              </p>
              <p>
                Falls künftig ein E-Mail-Dienstleister eingesetzt wird, wird diese Datenschutzerklärung vor oder mit
                Aktivierung entsprechend ergänzt.
              </p>
            </Section>

            <Section id="cookies-tracking" title="10. Cookies und Tracking">
              <p>Aktuell setzen wir keine Tracking-Cookies und nutzen kein externes Webanalyse-Tool.</p>
              <p>
                Soweit technisch erforderliche Cookies oder vergleichbare Technologien eingesetzt werden, dienen sie
                ausschließlich dem Betrieb der Website oder vom Nutzer ausdrücklich gewünschten Funktionen. Für nicht
                erforderliche Cookies oder Tracking-Technologien wird vorab eine Einwilligung eingeholt, sofern dies
                rechtlich erforderlich ist.
              </p>
            </Section>

            <Section id="speicherdauer" title="11. Speicherdauer">
              <p>
                Waitlist-Daten speichern wir, solange die Beta-Vormerkung besteht oder bis Sie Ihre Einwilligung
                widerrufen.
              </p>
              <p>
                Nach einem Widerruf löschen oder sperren wir die Daten, soweit keine gesetzlichen Aufbewahrungspflichten
                oder berechtigten Nachweisinteressen entgegenstehen.
              </p>
              <p>
                Technische Logdaten werden nur so lange gespeichert, wie dies für Sicherheit, Betrieb und Fehleranalyse
                erforderlich ist.
              </p>
            </Section>

            <Section id="empfaenger" title="12. Empfänger personenbezogener Daten">
              <p>Personenbezogene Daten können an folgende Kategorien von Empfängern übermittelt werden:</p>
              <BulletList items={recipients} />
              <p>Eine Weitergabe zu Werbezwecken an Dritte erfolgt nicht.</p>
            </Section>

            <Section id="drittlanduebermittlung" title="13. Drittlandübermittlung">
              <p>
                Je nach eingesetzten Dienstleistern kann eine Verarbeitung personenbezogener Daten außerhalb der EU oder
                des EWR stattfinden.
              </p>
              <p>
                In solchen Fällen achten wir darauf, dass geeignete Datenschutzgarantien vorliegen, zum Beispiel
                Angemessenheitsbeschlüsse, Standardvertragsklauseln oder andere nach der DSGVO vorgesehene Mechanismen.
              </p>
            </Section>

            <Section id="rechte" title="14. Ihre Rechte">
              <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
              <BulletList items={dataSubjectRights} />
              <p>
                Zur Ausübung Ihrer Rechte können Sie sich jederzeit an{" "}
                <a href="mailto:kontakt@piatto.world" className="font-semibold text-piatto-olive underline underline-offset-4">
                  kontakt@piatto.world
                </a>{" "}
                wenden.
              </p>
            </Section>

            <Section id="bereitstellung" title="15. Pflicht zur Bereitstellung">
              <p>Die Angabe einer E-Mail-Adresse ist erforderlich, um sich in die Waitlist einzutragen.</p>
              <p>Weitere Angaben sind freiwillig, sofern sie im Formular angeboten werden.</p>
              <p>Ohne E-Mail-Adresse ist eine Aufnahme in die Waitlist nicht möglich.</p>
            </Section>

            <Section id="minderjaehrige" title="16. Minderjährige">
              <p>
                Unser Angebot richtet sich nicht gezielt an Kinder. Minderjährige sollten personenbezogene Daten nur mit
                Zustimmung der Erziehungsberechtigten übermitteln.
              </p>
            </Section>

            <Section id="aenderungen" title="17. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Website, eingesetzte Dienste oder
                rechtliche Anforderungen ändern.
              </p>
            </Section>
          </article>

          <footer className="mt-12 flex flex-col gap-4 border-t border-piatto-line pt-8 text-sm font-semibold text-piatto-muted sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Zurück zur Startseite
            </Link>
            <Link href="/impressum" className="rounded-md transition hover:text-piatto-ink focus-ring">
              Impressum
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
