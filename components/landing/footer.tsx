import { PiattoLogo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-piatto-line bg-piatto-cream px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <PiattoLogo className="text-lg" />
          <p className="mt-3 text-sm font-semibold text-piatto-muted">Dish-first Food Discovery.</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-piatto-muted" aria-label="Footer">
          <a href="/datenschutz" className="rounded-md transition hover:text-piatto-ink focus-ring">
            Datenschutz
          </a>
          <a href="/impressum" className="rounded-md transition hover:text-piatto-ink focus-ring">
            Impressum
          </a>
          <a href="/kontakt" className="rounded-md transition hover:text-piatto-ink focus-ring">
            Kontakt
          </a>
          <a href="/login" className="rounded-md transition hover:text-piatto-ink focus-ring">
            Login
          </a>
        </nav>

        <p className="text-sm text-piatto-muted">© {year} Piatto</p>
      </div>
    </footer>
  );
}
