import { Bookmark, Heart, ListFilter, Search, Star } from "lucide-react";

const previews = [
  {
    title: "Dish Feed",
    text: "Ein Feed voller Gerichte.",
    kind: "feed",
  },
  {
    title: "Suche",
    text: "Craving eingeben, Gerichte vergleichen.",
    kind: "search",
  },
  {
    title: "Dish Detail",
    text: "Bewertung, Preis und Restaurant auf einen Blick.",
    kind: "detail",
  },
];

export function ProductPreview() {
  return (
    <section id="product" className="piatto-section-soft scroll-mt-24 bg-piatto-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">Vorschau</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-piatto-ink sm:text-5xl">
            So könnte Piatto aussehen.
          </h2>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {previews.map((preview) => (
            <article key={preview.title} className="piatto-card-glow rounded-[1.45rem] border border-piatto-line bg-[#fffaf3] p-5">
              <PreviewVisual kind={preview.kind} />
              <h3 className="mt-5 text-2xl font-semibold text-piatto-ink">{preview.title}</h3>
              <p className="mt-2 leading-7 text-piatto-muted">{preview.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewVisual({ kind }: { kind: string }) {
  if (kind === "search") {
    return (
      <div className="rounded-[1.2rem] border border-piatto-line bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 rounded-2xl border border-piatto-line bg-piatto-cream/70 px-3 py-3 text-sm font-semibold text-piatto-muted">
          <Search className="size-4 text-piatto-olive" aria-hidden="true" />
          schnitzel mainz
        </div>
        <div className="mt-4 flex gap-2">
          {["4,8", "4,3", "4,0"].map((rating) => (
            <span key={rating} className="inline-flex items-center gap-1 rounded-full bg-piatto-cream px-3 py-1 text-xs font-semibold text-piatto-olive">
              <Star className="size-3 fill-piatto-olive" aria-hidden="true" />
              {rating}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "detail") {
    return (
      <div className="rounded-[1.2rem] border border-piatto-line bg-white p-4 shadow-sm">
        <div className="terracotta-texture h-24 rounded-[1rem]" />
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-piatto-ink">Schnitzel Wiener Art</p>
            <p className="mt-1 text-sm text-piatto-muted">Mainz · 15,90 €</p>
          </div>
          <Heart className="size-5 text-piatto-terracotta" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.2rem] border border-piatto-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between text-sm font-semibold text-piatto-muted">
        <span className="inline-flex items-center gap-2">
          <ListFilter className="size-4 text-piatto-olive" aria-hidden="true" />
          Mainz
        </span>
        <Bookmark className="size-4 text-piatto-terracotta" aria-hidden="true" />
      </div>
      <div className="mt-4 grid gap-2">
        {["Schnitzel", "Pasta", "Bowl"].map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-piatto-line bg-piatto-card p-2">
            <span className={index === 1 ? "size-10 rounded-xl olive-texture" : "size-10 rounded-xl terracotta-texture"} />
            <span className="text-sm font-semibold text-piatto-ink">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
