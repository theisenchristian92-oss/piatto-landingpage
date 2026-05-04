import { Heart, Home, MapPin, Search, Star, UserRound } from "lucide-react";

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
            <article className="overflow-hidden rounded-[1.55rem] border border-piatto-line bg-white shadow-[0_18px_36px_rgba(65,51,35,0.11)]">
              <div className="relative h-[8.5rem] overflow-hidden bg-piatto-cream">
                <img src={featuredDish.image} alt="" className="h-full w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(31,33,26,0.62))]" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/82">Heute im Feed</p>
                    <h2 className="mt-1 text-base font-semibold leading-tight text-white">{featuredDish.name}</h2>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fffaf3] px-2.5 py-1 text-xs font-semibold text-piatto-olive shadow-sm">
                    <Star className="size-3.5 fill-piatto-olive" aria-hidden="true" />
                    {featuredDish.rating}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-semibold">
                <span className="text-piatto-muted">{featuredDish.detail}</span>
                <span className="text-piatto-ink">{featuredDish.price}</span>
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
          <circle cx="45.6" cy="15.8" r="8.2" fill="black" />
          <circle cx="51.2" cy="23.5" r="5.3" fill="black" />
        </mask>
      </defs>
      <circle cx="32" cy="32" r="24.5" fill="#fffaf3" />
      <circle cx="32" cy="32" r="24.5" fill="none" stroke="#D96C3B" strokeWidth="5.2" mask="url(#piatto-plate-bite)" />
      <path d="M23.3 22.7c3.3-4.8 8.6-7.1 14.4-6.4" fill="none" stroke="#55623B" strokeLinecap="round" strokeWidth="4.5" />
    </svg>
  );
}
