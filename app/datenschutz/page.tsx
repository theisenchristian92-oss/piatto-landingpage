import type { Metadata } from "next";
import Link from "next/link";
import { PiattoLogo } from "@/components/landing/logo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Piatto",
  description: "Datenschutzhinweise für die Piatto Landingpage und Waitlist zur Mainz Beta.",
};

const sections = [
  { id: "kurzueberblick", label: "Kurzüberblick" },
  { id: "verantwortlicher", label: "Verantwortlicher" },
  { id: "datenschutzanfragen", label: "Datenschutzanfragen" },
  { id: "websitebesuch", label: "Besuch der Website" },
  { id: "waitlist", label: "Waitlist und Beta" },
  { id: "double-opt-in", label: "Double Opt-in" },
  { id: "supabase", label: "Supabase" },
  { id: "e-mail-anbieter", label: "E-Mail-Anbieter" },
  { id: "cookies-tracking", label: "Cookies und Tracking" },
  { id: "speicherdauer", label: "Speicherdauer" },
  { id: "empfaenger", label: "Empfänger" },
  { id: "drittlanduebermittlung", label: "Drittlandübermittlung" },
  { id: "rechte", label: "Betroffenenrechte" },
  { id: "bereitstellung", label: "Pflicht zur Bereitstellung" },
  { id: "minderjaehrige", label: "Minderjährige" },
  { id: "aenderungen", label: "Änderungen" },
];

const waitlistData = [
  "E-Mail-Adresse",
  "Rolle: Gast, Restaurant oder Creator",
  "Name, falls angegeben",
  "Stadt, falls angegeben",
  "Restaurantname, falls angegeben",
  "Website, falls angegeben",
  "Social Handle, falls angegeben",
  "Nachricht, falls angegeben",
  "Einwilligungsstatus",
  "Zeitpunkt der Einwilligung",
  "technische Metadaten wie User-Agent, Referrer oder UTM-Parameter, falls gespeichert",
];

const waitlistPurposes = [
  "Aufnahme in die Piatto Waitlist",
  "Kontaktaufnahme zur Beta",
  "Versand von Beta-Updates",
  "Einordnung, ob eine Anmeldung von Gast, Restaurant oder Creator kommt",
  "Verbesserung der Beta-Planung",
];

const dataSubjectRights = [
  "Auskunft",
  "Berichtigung",
  "Löschung",
  "Einschränkung der Verarbeitung",
  "Datenübertragbarkeit",
  "Widerspruch",
  "Widerruf einer Einwilligung",
  "Beschwerde bei einer Datenschutzaufsichtsbehörde",
];

function TodoNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 rounded-lg border border-piatto-terracotta/30 bg-[#FFF3EA] px-4 py-3 text-sm font-semibold leading-6 text-piatto-ink">
      TODO: {children}
    </p>
  );
}

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
      <h2 className="text-2xl font-semibold leading-tight text-piatto-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-piatto-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
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
          <h1 className="mt-4 break-words text-3xl font-semibold leading-tight text-piatto-ink sm:text-5xl">
            Datenschutz<wbr />
            erklärung
          </h1>
          <p className="mt-5 text-base leading-8 text-piatto-muted">Stand: 3. Mai 2026</p>

          <div className="mt-8 rounded-lg border border-piatto-line bg-white px-5 py-5 shadow-piatto sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-piatto-olive">Inhalt</p>
            <nav className="mt-4 grid gap-2 text-sm font-semibold leading-6 text-piatto-muted sm:grid-cols-2" aria-label="Inhaltsverzeichnis">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-md py-1 transition hover:text-piatto-ink focus-ring">
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <article className="mt-10 space-y-10">
            <Section id="kurzueberblick" title="Kurzüberblick">
              <p>
                Piatto ist eine dish-first Food Discovery Plattform. Diese Website sammelt frühe Registrierungen für die
                Mainz Beta.
              </p>
              <p>
                Die Verarbeitung betrifft aktuell vor allem den Aufruf der Website, die Eintragung in die Waitlist und
                die Kontaktaufnahme im Zusammenhang mit der Beta.
              </p>
            </Section>

            <Section id="verantwortlicher" title="Verantwortlicher">
              <div className="rounded-lg border border-piatto-line bg-white px-4 py-4 text-piatto-ink">
                <p className="font-semibold">Piatto</p>
                <p>[Name/Firma ergänzen]</p>
                <p>[Adresse ergänzen]</p>
                <p>E-Mail: [kontakt@piatto.world oder finale E-Mail ergänzen]</p>
              </div>
              <TodoNote>Verantwortlichen final vor Public Launch ergänzen.</TodoNote>
            </Section>

            <Section id="datenschutzanfragen" title="Kontakt für Datenschutzanfragen">
              <p>
                Für Datenschutzanfragen erreichen Sie uns unter [datenschutz@piatto.world oder kontakt@piatto.world
                ergänzen].
              </p>
            </Section>

            <Section id="websitebesuch" title="Verarbeitung beim Besuch der Website">
              <p>Beim Aufruf der Website können technische Daten verarbeitet werden, zum Beispiel:</p>
              <BulletList
                items={[
                  "IP-Adresse",
                  "Datum und Uhrzeit des Abrufs",
                  "aufgerufene Seiten",
                  "Browser und Betriebssystem",
                  "Referrer",
                  "Server-Logdaten",
                ]}
              />
              <p>
                Die Verarbeitung erfolgt zur technischen Bereitstellung der Website, zur Sicherheit und zur
                Fehleranalyse.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und
                zuverlässigen Betrieb dieser Website.
              </p>
              <p>Diese Website wird über [Hosting-Anbieter ergänzen] bereitgestellt.</p>
              <TodoNote>Hosting-Anbieter, Speicherort, Auftragsverarbeitung und Log-Speicherdauer final ergänzen.</TodoNote>
            </Section>

            <Section id="waitlist" title="Waitlist und Beta-Registrierung">
              <p>Wenn sich Nutzer auf die Piatto Waitlist eintragen, verarbeiten wir die angegebenen Daten.</p>
              <div>
                <p className="font-semibold text-piatto-ink">Daten</p>
                <BulletList items={waitlistData} />
              </div>
              <div>
                <p className="font-semibold text-piatto-ink">Zwecke</p>
                <BulletList items={waitlistPurposes} />
              </div>
              <p>
                Rechtsgrundlage für die Kontaktaufnahme und den Versand von Beta-Updates ist Art. 6 Abs. 1 lit. a DSGVO,
                also Ihre Einwilligung.
              </p>
              <p>
                Für die technische Speicherung und den Nachweis der Einwilligung stützen wir uns zusätzlich auf Art. 6
                Abs. 1 lit. f DSGVO.
              </p>
              <p>Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            </Section>

            <Section id="double-opt-in" title="Double Opt-in">
              <p>
                Double Opt-in ist im Datenmodell vorbereitet. Der Mailversand ist aktuell noch nicht angebunden.
              </p>
              <p>
                Sobald wir regelmäßige Beta-Updates oder Newsletter versenden, werden wir hierfür ein
                Double-Opt-in-Verfahren einsetzen, soweit erforderlich.
              </p>
            </Section>

            <Section id="supabase" title="Supabase">
              <p>
                Waitlist-Daten werden in Supabase gespeichert. Für die Datenbank nutzen wir Supabase. Supabase
                verarbeitet Daten als technischer Dienstleister.
              </p>
              <TodoNote>
                genaue Supabase-Region prüfen, Auftragsverarbeitungsvertrag prüfen, Drittlandübermittlung prüfen und
                Anbieterangaben final ergänzen.
              </TodoNote>
            </Section>

            <Section id="e-mail-anbieter" title="E-Mail-Anbieter">
              <p>
                Für den späteren Versand von Beta-Updates kann ein E-Mail-Dienstleister eingesetzt werden. Der konkrete
                Anbieter wird vor Aktivierung des Versands in dieser Datenschutzerklärung ergänzt.
              </p>
              <TodoNote>Brevo, Resend oder anderen Anbieter prüfen und erst nach finaler Auswahl ergänzen.</TodoNote>
            </Section>

            <Section id="cookies-tracking" title="Cookies und Tracking">
              <p>Aktuell setzen wir keine Tracking-Cookies und nutzen kein externes Webanalyse-Tool.</p>
            </Section>

            <Section id="speicherdauer" title="Speicherdauer">
              <p>
                Waitlist-Daten speichern wir, solange die Beta-Vormerkung besteht oder bis die Einwilligung widerrufen
                wird.
              </p>
              <p>
                Nach Widerruf löschen oder sperren wir die Daten, soweit keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
              <p>Server-Logs werden nur so lange gespeichert, wie es für Sicherheit und Betrieb erforderlich ist.</p>
              <TodoNote>Konkrete Hosting-Log-Speicherdauer ergänzen.</TodoNote>
            </Section>

            <Section id="empfaenger" title="Empfänger personenbezogener Daten">
              <p>Personenbezogene Daten können an folgende Kategorien von Empfängern übermittelt werden:</p>
              <BulletList
                items={[
                  "Hosting-Anbieter",
                  "Datenbankanbieter Supabase",
                  "E-Mail-Dienstleister, sobald angebunden",
                  "technische Dienstleister im Rahmen von Wartung und Betrieb",
                ]}
              />
            </Section>

            <Section id="drittlanduebermittlung" title="Drittlandübermittlung">
              <p>
                Eine Übermittlung in Länder außerhalb der EU/des EWR kann je nach eingesetzten Dienstleistern
                stattfinden. In diesem Fall achten wir auf geeignete Garantien nach DSGVO, zum Beispiel
                Angemessenheitsbeschlüsse oder Standardvertragsklauseln.
              </p>
              <TodoNote>Konkrete Dienstleister und Transfermechanismen final prüfen.</TodoNote>
            </Section>

            <Section id="rechte" title="Betroffenenrechte">
              <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
              <BulletList items={dataSubjectRights} />
            </Section>

            <Section id="bereitstellung" title="Pflicht zur Bereitstellung">
              <p>
                Die Angabe der E-Mail-Adresse und der Rolle ist für die Waitlist erforderlich. Optionale Felder sind
                freiwillig.
              </p>
              <p>Ohne E-Mail-Adresse kann keine Aufnahme in die Waitlist erfolgen.</p>
            </Section>

            <Section id="minderjaehrige" title="Minderjährige">
              <p>
                Unser Angebot richtet sich nicht gezielt an Kinder. Minderjährige sollten personenbezogene Daten nur mit
                Zustimmung der Erziehungsberechtigten übermitteln.
              </p>
            </Section>

            <Section id="aenderungen" title="Änderungen dieser Datenschutzerklärung">
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
