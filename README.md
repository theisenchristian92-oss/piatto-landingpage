# Piatto Landingpage

Eigenständige öffentliche Landingpage für Piatto mit serverseitiger Supabase-Waitlist.

Piatto ist eine dish-first Food Discovery Plattform. Die Landingpage sammelt frühe Registrierungen von Gästen, Restaurants und Creatorn für die Mainz Beta.

## Aktueller Status

- Die Landingpage ist unter `/` erreichbar.
- `npm run build` läuft erfolgreich.
- `/api/waitlist`, `/datenschutz` und `/impressum` werden gebaut.
- Die Waitlist speichert erfolgreich in Supabase.
- Datenschutz und Impressum sind aktuell Platzhalter und müssen vor Public Launch juristisch finalisiert werden.
- Double Opt-in ist im Datenmodell vorbereitet, der Mailversand ist aber noch nicht angebunden.

## Erfolgreich geprüfte Punkte

- Landingpage-Route `/` läuft.
- Waitlist-Registrierungen laufen über die serverseitige API Route `POST /api/waitlist`.
- Unterstützte Rollen: `guest`, `restaurant`, `creator`.
- Pflichtfelder: E-Mail, Rolle, Consent Checkbox.
- Optionale Felder: Name, Stadt, Restaurantname, Website, Social Handle, Nachricht.
- `public.waitlist_signups` ist in Supabase vorhanden.
- RLS auf `public.waitlist_signups` ist aktiv.
- Es gibt keine öffentliche Select Policy.
- `email_normalized` ist eindeutig.
- Doppelte E-Mails werden sauber und freundlich behandelt.
- Consent wird mit Zeitstempel und Consent-Version gespeichert.
- Keine Service-Role-Secrets wurden im Client-Bundle gefunden.

## Supabase SQL Datei

Die Tabelle wird über folgende SQL-Datei angelegt:

```text
supabase/waitlist_signups.sql
```

Die Tabelle heißt:

```text
public.waitlist_signups
```

Grundsätze:

- RLS ist aktiviert.
- Es gibt keine öffentliche Select Policy.
- Inserts laufen nicht direkt aus dem Client.
- Inserts laufen über die serverseitige API Route.
- `email_normalized` ist eindeutig.
- Double Opt-in ist im Datenmodell vorbereitet.

## Supabase Kontrollqueries

Letzte Waitlist-Einträge prüfen:

```sql
select email, role, city, created_at
from public.waitlist_signups
order by created_at desc;
```

RLS-Status prüfen:

```sql
select schemaname, tablename, rowsecurity
from pg_tables
where schemaname = 'public'
  and tablename = 'waitlist_signups';
```

Policies prüfen:

```sql
select schemaname, tablename, policyname, permissive, roles, cmd
from pg_policies
where schemaname = 'public'
  and tablename = 'waitlist_signups';
```

Duplicate-Normalisierung prüfen:

```sql
select email_normalized, count(*)
from public.waitlist_signups
group by email_normalized
having count(*) > 1;
```

## Hosting-ENV Check

Benötigte Variablen:

```bash
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Wichtig:

- `SUPABASE_SERVICE_ROLE_KEY` nur serverseitig in der Hosting-ENV setzen.
- `SUPABASE_SERVICE_ROLE_KEY` niemals mit `NEXT_PUBLIC_` prefixen.
- Keine Service Role Keys committen.
- Public Client Variablen dürfen nur Werte enthalten, die für den Browser bestimmt sind.

## API

Die Waitlist schreibt über:

```text
POST /api/waitlist
```

Erfolgreiche Antworten:

```json
{ "ok": true, "status": "created" }
```

```json
{ "ok": true, "status": "already_exists" }
```

Fehlerhafte Validierung:

```json
{ "ok": false, "error": "validation_error" }
```

## Kontaktseite

- Route: `/kontakt`
- Kontaktweg: Supabase Kontaktformular und E-Mail an `kontakt@piatto.world`
- API Route: `POST /api/contact`
- SQL Datei: `supabase/contact_messages.sql`
- ENV unverändert; `SUPABASE_SERVICE_ROLE_KEY` bleibt ausschließlich serverseitig
- Datenschutz vor Public Launch final prüfen

## Qualitätssicherung

Lokaler Start:

```bash
npm install
npm run dev
```

Build prüfen:

```bash
npm run build
```

## P0 vor Public Launch

- Datenschutz juristisch finalisieren.
- Impressum juristisch finalisieren.
- Produktiv-ENV im Hosting prüfen.
- Sicherstellen, dass `SUPABASE_SERVICE_ROLE_KEY` ausschließlich serverseitig gesetzt ist.
- Supabase RLS und Policies in Produktion prüfen.
- Kontrollierten End-to-End-Test der Waitlist in der Produktivumgebung durchführen.

## P1 nach Beta Start

- Double Opt-in Anbieter auswählen und anbinden, zum Beispiel Brevo, Resend oder einen anderen Mailprovider.
- Double Opt-in Mailversand produktiv testen.
- Mobile Darstellung auf echten Geräten feinprüfen.
- README um den finalen Double-Opt-in- und Betriebsprozess ergänzen.
- Optional Monitoring für Waitlist-Fehler und Duplicate-Anmeldungen ergänzen.
