import { ArrowLeft, Heart, Home, MapPin, Search, Star, UserRound, Utensils } from "lucide-react";

type Dish = {
  name: string;
  detail: string;
  restaurant: string;
  rating: string;
  votes: string;
  time: string;
  price: string;
  image: string;
};

const schnitzelDishes: Dish[] = [
  {
    name: "Schnitzel mit Gurkensalat",
    detail: "Gurke, Zitrone, Preiselbeeren",
    restaurant: "Gasthaus Rheinblick",
    rating: "4,8",
    votes: "128",
    time: "20-30 min",
    price: "15,90 €",
    image: "/dishes/schnitzel-feed-1.png",
  },
  {
    name: "Rahmschnitzel mit Pilzen",
    detail: "Pilzrahm, grüne Bohnen",
    restaurant: "Weinstube Adler",
    rating: "4,3",
    votes: "89",
    time: "25-35 min",
    price: "17,20 €",
    image: "/dishes/schnitzel-feed-2.png",
  },
  {
    name: "Schnitzel mit Kartoffelsalat",
    detail: "Kartoffelsalat, Zitrone",
    restaurant: "Mainzer Stuben",
    rating: "4,0",
    votes: "74",
    time: "20-30 min",
    price: "16,40 €",
    image: "/dishes/schnitzel-feed-3.png",
  },
  {
    name: "Schnitzel Wiener Art",
    detail: "Pommes, Zitrone, Petersilie",
    restaurant: "Zum Markt",
    rating: "3,6",
    votes: "52",
    time: "15-25 min",
    price: "14,80 €",
    image: "/dishes/schnitzel-feed-4.png",
  },
];

const featuredDish = schnitzelDishes[0];
const feedDishes = schnitzelDishes.slice(1);

export function AppMockup() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[21.5rem] pt-3" aria-label="Piatto App Vorschau mit Schnitzel Feed">
      <MockupDecor />
      <PhoneFrame>
        <AppScreen />
      </PhoneFrame>
    </div>
  );
}

function MockupDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute -left-8 top-20 hidden h-40 w-24 -rotate-6 rounded-[1.25rem] border border-piatto-line bg-white/62 shadow-piatto md:block" />
      <div className="absolute -right-7 bottom-24 hidden h-32 w-24 rotate-6 rounded-[1.25rem] border border-[#b85230]/25 bg-piatto-terracotta/82 shadow-piatto md:block" />
      <div className="absolute inset-x-5 bottom-2 h-20 rounded-full bg-piatto-terracotta/16 blur-3xl" />
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 aspect-[430/932] rounded-[3.15rem] border border-[#24251f] bg-[#12130f] p-[0.56rem] shadow-[0_34px_90px_rgba(52,38,24,0.32),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      <div className="absolute -left-1 top-28 z-0 h-16 w-1 rounded-l-full bg-[#2a2b23]" aria-hidden="true" />
      <div className="absolute -right-1 top-40 z-0 h-24 w-1 rounded-r-full bg-[#2a2b23]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[1.02rem] z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-[#11120f] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]" aria-hidden="true" />
      <div className="relative z-10 h-full overflow-hidden rounded-[2.58rem] bg-[#fffaf3]">{children}</div>
    </div>
  );
}

function AppScreen() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#fffaf3]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(145deg,rgba(217,108,59,0.13),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(245,233,218,0.22))]" aria-hidden="true" />
      <AppHeader />
      <main className="relative z-10 min-h-0 flex-1 overflow-hidden px-4 pb-[5.4rem] pt-3">
        <FeaturedDishCard dish={featuredDish} />
        <div className="mt-2.5 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#1F1F1A]">Weitere Gerichte</p>
          <p className="text-[0.66rem] font-semibold uppercase text-[#D96C3B]">Dish-first</p>
        </div>
        <div className="mt-2 space-y-2">
          {feedDishes.map((dish, index) => (
            <DishListCard key={dish.name} dish={dish} active={index === 0} />
          ))}
        </div>
      </main>
      <PiattoTabBar />
    </div>
  );
}

function AppHeader() {
  return (
    <header className="relative z-10 shrink-0 border-b border-[#E6D7C5]/70 bg-[#fffaf3]/88 px-4 pb-3 pt-[3.05rem] backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.64rem] font-semibold uppercase text-[#D96C3B]">PIATTO</p>
          <p className="mt-1 truncate text-[1.18rem] font-semibold text-[#1F1F1A]">Gerichte entdecken</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#E6D7C5] bg-white/88 px-2.5 py-1 text-[0.7rem] font-semibold text-[#55623B] shadow-sm">
          <MapPin className="size-3.5" aria-hidden="true" />
          Mainz
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-[#E6D7C5] bg-white/92 px-3 py-2.5 text-sm font-medium text-[#6F6A5F] shadow-sm">
        <Search className="size-4 shrink-0 text-[#55623B]" aria-hidden="true" />
        <span>Schnitzel</span>
      </div>
    </header>
  );
}

function FeaturedDishCard({ dish }: { dish: Dish }) {
  return (
    <article className="overflow-hidden rounded-[1.45rem] border border-[#E6D7C5] bg-[#fffaf3] shadow-[0_16px_32px_rgba(65,51,35,0.11)]">
      <div className="relative h-[6.9rem] overflow-hidden bg-[#F5E9DA]">
        <img src={dish.image} alt="" className="h-full w-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,28,18,0.05),rgba(38,28,18,0.18))]" aria-hidden="true" />
        <button className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-full bg-[#fffaf3]/94 text-[#55623B] shadow-[0_8px_18px_rgba(44,34,23,0.16)]" aria-label="Zurueck">
          <ArrowLeft className="size-4 stroke-[2.3]" aria-hidden="true" />
        </button>
        <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-[#fffaf3]/94 text-[#55623B] shadow-[0_8px_18px_rgba(44,34,23,0.16)]" aria-label="Favorit speichern">
          <Heart className="size-4 stroke-[2.2]" aria-hidden="true" />
        </button>
      </div>
      <div className="relative -mt-4 rounded-t-[1.35rem] border-t border-[#f0e2d5] bg-[#fffaf3] px-3.5 pb-3 pt-3 shadow-[0_-7px_16px_rgba(65,51,35,0.06)]">
        <h2 className="overflow-hidden text-[1.02rem] font-semibold leading-tight text-[#55623B] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">{dish.name}</h2>
        <div className="mt-1.5 flex min-w-0 items-center gap-1.5 text-[0.68rem] font-medium text-[#6F6A5F]">
          <Utensils className="size-3.5 shrink-0 text-[#D96C3B]" aria-hidden="true" />
          <span className="truncate">{dish.restaurant}</span>
          <span aria-hidden="true">•</span>
          <span>Mainz</span>
        </div>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3eadf] px-2.5 py-1 text-[0.7rem] font-semibold text-[#6F6A5F]">
            <Star className="size-3.5 fill-[#D96C3B] text-[#D96C3B]" aria-hidden="true" />
            {dish.rating}
            <span className="h-3 w-px bg-[#d7c7b8]" aria-hidden="true" />
            {dish.votes}
          </span>
          <span className="shrink-0 text-base font-semibold text-[#D96C3B]">{dish.price}</span>
        </div>
      </div>
    </article>
  );
}

function DishListCard({ dish, active }: { dish: Dish; active: boolean }) {
  return (
    <article className={["h-[4.7rem] rounded-[1rem] border bg-white/94 p-2 shadow-[0_9px_22px_rgba(65,51,35,0.07)]", active ? "border-[#D96C3B]/78" : "border-[#E6D7C5]"].join(" ")}>
      <div className="grid h-full grid-cols-[4.35rem_minmax(0,1fr)] gap-2.5">
        <div className="relative h-full overflow-hidden rounded-[0.78rem] bg-[#F5E9DA]">
          <img src={dish.image} alt="" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="grid min-w-0 grid-rows-[auto_1fr_auto] py-0.5">
          <div className="flex min-w-0 items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="overflow-hidden text-[0.82rem] font-semibold leading-tight text-[#1F1F1A] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:1]">{dish.name}</h3>
              <p className="mt-0.5 truncate text-[0.64rem] font-medium text-[#6F6A5F]">
                {dish.restaurant}
              </p>
            </div>
            <Heart className={["mt-0.5 size-3.5 shrink-0", active ? "fill-[#D96C3B] text-[#D96C3B]" : "text-[#1F1F1A]"].join(" ")} aria-hidden="true" />
          </div>
          <p className="min-w-0 truncate self-center text-[0.58rem] font-medium text-[#6F6A5F]">{dish.detail}</p>
          <div className="flex min-w-0 items-center justify-between gap-1.5 text-[0.6rem] font-semibold">
            <span className={["inline-flex shrink-0 items-center gap-1 rounded-[0.5rem] px-1.5 py-0.5", active ? "bg-[#D96C3B] text-white" : "bg-[#f3eadf] text-[#55623B]"].join(" ")}>
              <Star className="size-2.5 fill-current" aria-hidden="true" />
              {dish.rating}
            </span>
            <span className="min-w-0 truncate text-[#6F6A5F]">({dish.votes})</span>
            <span className="shrink-0 text-[0.72rem] font-semibold text-[#D96C3B]">{dish.price}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function PiattoTabBar() {
  return (
    <nav aria-label="Piatto App Navigation" className="absolute inset-x-3 bottom-3 z-20">
      <div className="grid grid-cols-[1fr_1fr_3.85rem_1fr_1fr] items-center rounded-[1.2rem] border border-[#E6D7C5] bg-[#fffaf3]/97 px-2.5 py-2 text-center shadow-[0_12px_28px_rgba(65,51,35,0.13),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur">
        <TabItem icon={Home} label="Home" />
        <TabItem icon={Search} label="Suche" active />
        <span className="relative flex min-w-0 justify-center self-stretch">
          <span className="absolute left-1/2 top-1/2 flex size-[3.55rem] -translate-x-1/2 -translate-y-[63%] items-center justify-center rounded-full bg-[#fffaf3] shadow-[0_9px_20px_rgba(65,51,35,0.12)] ring-[4px] ring-[#fffaf3]">
            <PiattoPlateMark className="size-[3.35rem]" />
          </span>
          <span className="sr-only">Piatto Feed</span>
        </span>
        <TabItem icon={Heart} label="Favoriten" />
        <TabItem icon={UserRound} label="Profil" />
      </div>
    </nav>
  );
}

function TabItem({ icon: Icon, label, active = false }: { icon: typeof Home; label: string; active?: boolean }) {
  return (
    <span className={["flex min-w-0 flex-col items-center gap-0.5 rounded-xl px-1 py-1 text-[0.5rem] font-semibold leading-none", active ? "bg-[#f7dfd1] text-[#D96C3B]" : "text-[#1F1F1A]"].join(" ")} aria-current={active ? "page" : undefined}>
      <Icon className="size-3.5 stroke-[2.15]" aria-hidden="true" />
      {label}
    </span>
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
