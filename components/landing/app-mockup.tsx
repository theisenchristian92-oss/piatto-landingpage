import { ArrowLeft, Heart, Home, MapPin, Search, Star, UserRound, Utensils } from "lucide-react";

const schnitzelDishes = [
  {
    name: "Schnitzel mit Gurkensalat",
    detail: "Gurke, Zitrone, Preiselbeeren",
    rating: "4,8",
    price: "15,90 €",
    image: "/dishes/schnitzel-feed-1.png",
  },
  {
    name: "Rahmschnitzel mit Pilzen",
    detail: "Pilzrahm, grüne Bohnen",
    rating: "4,3",
    price: "17,20 €",
    image: "/dishes/schnitzel-feed-2.png",
  },
  {
    name: "Schnitzel mit Kartoffelsalat",
    detail: "Kartoffelsalat, Zitrone",
    rating: "4,0",
    price: "16,40 €",
    image: "/dishes/schnitzel-feed-3.png",
  },
  {
    name: "Schnitzel Wiener Art",
    detail: "Pommes, Zitrone, Petersilie",
    rating: "3,6",
    price: "14,80 €",
    image: "/dishes/schnitzel-feed-4.png",
  },
];

const featuredDish = schnitzelDishes[0];
const feedDishes = schnitzelDishes.slice(1);

export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[21.75rem]" aria-label="Piatto App Vorschau mit Schnitzel Feed">
      <div className="absolute -left-8 top-16 hidden h-44 w-28 -rotate-6 rounded-[1.4rem] border border-piatto-line bg-white/68 shadow-piatto md:block" />
      <div className="absolute -right-7 bottom-20 hidden h-36 w-28 rotate-6 rounded-[1.4rem] border border-[#b85230]/30 bg-piatto-terracotta/90 shadow-piatto md:block" />
      <div className="absolute inset-x-5 bottom-2 h-20 rounded-full bg-piatto-terracotta/18 blur-3xl" aria-hidden="true" />

      <div className="relative aspect-[780/1634] rounded-[3rem] border border-[#25251d] bg-[#151611] p-[0.5rem] shadow-[0_34px_90px_rgba(52,38,24,0.34),inset_0_0_0_1px_rgba(255,255,255,0.09)]">
        <div className="absolute -left-1 top-28 h-16 w-1 rounded-l-full bg-[#2a2b23]" aria-hidden="true" />
        <div className="absolute -right-1 top-40 h-24 w-1 rounded-r-full bg-[#2a2b23]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-4 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-[#11120f] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]" aria-hidden="true" />

        <div className="flex h-full flex-col overflow-hidden rounded-[2.45rem] bg-[#fffaf3]">
          <div className="relative shrink-0 border-b border-piatto-line/70 bg-[#fffaf3] px-4 pb-3 pt-[3.25rem]">
            <div className="absolute inset-0 bg-[linear-gradient(138deg,rgba(217,108,59,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.72),transparent)]" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-piatto-terracotta">PIATTO</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.01em] text-piatto-ink">Gerichte entdecken</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-piatto-line bg-white/86 px-2.5 py-1 text-[0.72rem] font-semibold text-piatto-olive shadow-sm">
                <MapPin className="size-3.5" aria-hidden="true" />
                Mainz
              </span>
            </div>
            <div className="relative mt-3 flex items-center gap-2 rounded-full border border-piatto-line bg-white/88 px-3 py-2.5 text-sm font-medium text-piatto-muted shadow-sm">
              <Search className="size-4 text-piatto-olive" aria-hidden="true" />
              Schnitzel
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-4 pb-3 pt-3">
            <article className="overflow-hidden rounded-[1.55rem] border border-[#e0cdbc] bg-[#fffaf3] shadow-[0_18px_38px_rgba(65,51,35,0.13)]">
              <div className="relative h-[8.65rem] overflow-hidden bg-piatto-cream">
                <img src={featuredDish.image} alt="" className="h-full w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,28,18,0.08),rgba(38,28,18,0.28))]" aria-hidden="true" />
                <button className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-full bg-[#fffaf3]/94 text-piatto-olive shadow-[0_8px_18px_rgba(44,34,23,0.18)]" aria-label="Zurueck">
                  <ArrowLeft className="size-4.5 stroke-[2.3]" aria-hidden="true" />
                </button>
                <button className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-[#fffaf3]/94 text-piatto-olive shadow-[0_8px_18px_rgba(44,34,23,0.18)]" aria-label="Favorit speichern">
                  <Heart className="size-4.5 stroke-[2.2]" aria-hidden="true" />
                </button>
              </div>
              <div className="relative -mt-5 rounded-t-[1.45rem] border-t border-[#f0e2d5] bg-[#fffaf3] px-3.5 pb-3.5 pt-3.5 shadow-[0_-8px_20px_rgba(65,51,35,0.08)]">
                <h2 className="truncate text-[1.18rem] font-semibold leading-tight text-piatto-olive">{featuredDish.name}</h2>
                <div className="mt-1.5 flex min-w-0 items-center gap-1.5 text-[0.72rem] font-medium text-piatto-muted">
                  <Utensils className="size-3.5 shrink-0 text-piatto-terracotta" aria-hidden="true" />
                  <span className="truncate">Piatto Beta</span>
                  <span aria-hidden="true">•</span>
                  <span>Mainz</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3eadf] px-2.5 py-1.5 text-[0.72rem] font-semibold text-piatto-muted">
                    <Star className="size-3.5 fill-piatto-terracotta text-piatto-terracotta" aria-hidden="true" />
                    {featuredDish.rating}
                    <span className="h-3 w-px bg-[#d7c7b8]" aria-hidden="true" />
                    128
                  </span>
                  <span className="text-lg font-semibold tracking-[-0.01em] text-piatto-terracotta">{featuredDish.price}</span>
                </div>
              </div>
            </article>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-piatto-ink">Weitere Gerichte</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-piatto-terracotta">Dish-first</p>
            </div>

            <div className="mt-2.5 space-y-2">
              {feedDishes.map((dish) => (
                <article key={dish.name} className="rounded-[1.1rem] border border-piatto-line bg-white/92 p-2 shadow-[0_10px_24px_rgba(65,51,35,0.07)]">
                  <div className="flex gap-3">
                    <div className="relative size-[3.7rem] shrink-0 overflow-hidden rounded-[0.9rem] bg-piatto-cream">
                      <img src={dish.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0 flex-1 py-0.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-piatto-ink">{dish.name}</h3>
                          <p className="mt-1 truncate text-[0.72rem] font-medium text-piatto-muted">{dish.detail}</p>
                        </div>
                        <Heart className="size-4 shrink-0 text-piatto-terracotta" aria-hidden="true" />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[0.72rem] font-semibold">
                        <span className="inline-flex items-center gap-1 rounded-full bg-piatto-cream px-2 py-1 text-piatto-olive">
                          <Star className="size-3.5 fill-piatto-olive" aria-hidden="true" />
                          {dish.rating}
                        </span>
                        <span className="text-piatto-ink">{dish.price}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <PiattoTabBar />
          </div>
        </div>
      </div>
    </div>
  );
}

function PiattoTabBar() {
  return (
    <nav aria-label="Piatto App Navigation" className="relative mt-auto pt-4">
      <div className="grid grid-cols-[1fr_1fr_3.85rem_1fr_1fr] items-center rounded-[1.2rem] border border-[#ead9ca] bg-[#fffaf3]/97 px-2.5 py-2 text-center shadow-[0_12px_28px_rgba(65,51,35,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur">
        <span className="flex min-w-0 flex-col items-center gap-0.5 rounded-xl px-1 py-1 text-[0.5rem] font-semibold leading-none text-piatto-ink">
          <Home className="size-3.5 stroke-[2.15]" aria-hidden="true" />
          Home
        </span>

        <span className="flex min-w-0 flex-col items-center gap-0.5 rounded-xl bg-[#f7dfd1] px-2 py-1 text-[0.5rem] font-semibold leading-none text-piatto-terracotta" aria-current="page">
          <Search className="size-3.5 stroke-[2.2]" aria-hidden="true" />
          Suche
        </span>

        <span className="relative flex min-w-0 justify-center self-stretch">
          <span className="absolute left-1/2 top-1/2 flex size-[3.65rem] -translate-x-1/2 -translate-y-[63%] items-center justify-center rounded-full bg-[#fffaf3] shadow-[0_9px_20px_rgba(65,51,35,0.12)] ring-[4px] ring-[#fffaf3]">
            <PiattoPlateMark className="size-[3.45rem]" />
          </span>
          <span className="sr-only">Piatto Feed</span>
        </span>

        <span className="flex min-w-0 flex-col items-center gap-0.5 rounded-xl px-1 py-1 text-[0.5rem] font-semibold leading-none text-piatto-ink">
          <Heart className="size-3.5 stroke-[2.15]" aria-hidden="true" />
          Favoriten
        </span>

        <span className="flex min-w-0 flex-col items-center gap-0.5 rounded-xl px-1 py-1 text-[0.5rem] font-semibold leading-none text-piatto-ink">
          <UserRound className="size-3.5 stroke-[2.15]" aria-hidden="true" />
          Profil
        </span>
      </div>
    </nav>
  );
}

function PiattoPlateMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <mask id="piatto-plate-bite">
          <rect width="64" height="64" fill="white" />
          <circle cx="44.8" cy="20.1" r="7.8" fill="black" />
          <circle cx="51.2" cy="27.2" r="5.6" fill="black" />
        </mask>
      </defs>
      <rect width="64" height="64" rx="18" fill="#D96C3B" />
      <circle cx="32" cy="34" r="18.6" fill="#F5E9DA" mask="url(#piatto-plate-bite)" />
      <path d="M23.5 31.8c1.6-6.9 6.8-11.4 14.1-12.1" fill="none" stroke="#55623B" strokeLinecap="round" strokeWidth="4.8" />
    </svg>
  );
}
