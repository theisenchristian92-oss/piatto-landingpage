import { Sparkles } from "lucide-react";
import { AppMockup } from "./app-mockup";
import { WaitlistJumpButton } from "./waitlist-form";

const piattoSteps = ["Entdecke", "Genieße", "Bewerte"];

export function Hero() {
  return (
    <section className="piatto-texture relative overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent,rgba(217,108,59,0.08)_42%,rgba(85,98,59,0.08))]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,25rem)] lg:items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-piatto-terracotta/25 bg-white/78 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-piatto-terracotta shadow-sm backdrop-blur">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Mainz Beta startet bald
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.015em] text-piatto-ink sm:text-6xl lg:text-7xl">
            Entdecke Gerichte, nicht nur Restaurants.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-piatto-muted sm:text-xl">
            Piatto zeigt dir konkrete Gerichte in deiner Nähe. Mit Bewertungen, Preisen und Restaurant-Kontext.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaitlistJumpButton>Zur Waitlist</WaitlistJumpButton>
            <WaitlistJumpButton role="restaurant" variant="secondary">
              Für Restaurants vormerken
            </WaitlistJumpButton>
          </div>

          <div className="mt-7 flex max-w-xl flex-wrap gap-2">
            {piattoSteps.map((step) => (
              <span key={step} className="rounded-full border border-piatto-terracotta/18 bg-white/78 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-piatto-olive shadow-sm">
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-10 hidden h-[74%] w-16 -rotate-3 rounded-[1.25rem] bg-piatto-cream/70 lg:block" aria-hidden="true" />
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
