import { Clapperboard, Store, UsersRound } from "lucide-react";
import { WaitlistJumpButton } from "./waitlist-form";

const audiences = [
  {
    id: "gaeste",
    title: "Gäste",
    text: "Finde schneller, worauf du Lust hast.",
    icon: UsersRound,
    image: "/landing/audience-guests.png",
    cta: <WaitlistJumpButton role="guest">Als Gast vormerken</WaitlistJumpButton>,
  },
  {
    id: "restaurants",
    title: "Restaurants",
    text: "Machen Sie Ihre besten Gerichte sichtbar.",
    icon: Store,
    image: "/landing/audience-restaurants.png",
    cta: (
      <WaitlistJumpButton role="restaurant" variant="olive">
        Restaurant vormerken
      </WaitlistJumpButton>
    ),
  },
  {
    id: "creator",
    title: "Creator",
    text: "Zeig, was in deiner Stadt gut schmeckt.",
    icon: Clapperboard,
    image: "/landing/audience-creators.png",
    cta: <WaitlistJumpButton role="creator">Als Creator vormerken</WaitlistJumpButton>,
  },
];

export function AudienceSections() {
  return (
    <section className="bg-[#fffaf3] px-5 pb-6 sm:px-8 lg:px-10 lg:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="piatto-card-glow scroll-mt-24 overflow-hidden rounded-[1.55rem] border border-piatto-line bg-white/92"
            >
              <div className="relative h-44 overflow-hidden bg-piatto-cream sm:h-48">
                <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(31,33,26,0.34))]" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-white/92 text-piatto-terracotta shadow-sm backdrop-blur">
                  <item.icon className="size-6" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-2xl font-semibold text-piatto-ink">{item.title}</h2>
                <p className="mt-3 min-h-14 text-lg leading-7 text-piatto-muted">{item.text}</p>
                <div className="mt-6">{item.cta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
