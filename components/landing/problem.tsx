import { Bookmark, Search, Star } from "lucide-react";

const cards = [
  {
    title: "Gerichte finden",
    text: "Suche direkt nach dem, worauf du Lust hast.",
    icon: Search,
    image: "/landing/card-gerichte-finden.png",
  },
  {
    title: "Bewertungen pro Gericht",
    text: "Sieh, welches Gericht wirklich überzeugt.",
    icon: Star,
    image: "/landing/card-bewertung-pro-gericht.png",
  },
  {
    title: "Favoriten speichern",
    text: "Speichere Gerichte für später.",
    icon: Bookmark,
    image: "/landing/card-favoriten-speichern.png",
  },
];

export function ProblemSection() {
  return (
    <section id="idee" className="scroll-mt-24 bg-[#fffaf3] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">Warum Piatto?</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-piatto-ink sm:text-5xl">
              Dish-first statt Restaurantliste.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-piatto-muted">
            Restaurantbewertungen zeigen selten, welches Gericht wirklich gut ist. Piatto macht einzelne Gerichte sichtbar, suchbar und bewertbar.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {cards.map((item) => (
            <article key={item.title} className="piatto-card-glow overflow-hidden rounded-[1.25rem] border border-piatto-line bg-white/88">
              <div className="relative h-44 overflow-hidden bg-piatto-cream sm:h-48">
                <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(31,33,26,0.28))]" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-2xl bg-white/92 text-piatto-terracotta shadow-sm backdrop-blur">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-piatto-ink">{item.title}</h3>
                <p className="mt-2 leading-7 text-piatto-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
