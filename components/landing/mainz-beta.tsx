const badges = ["Mainz Beta", "Dish-first", "Waitlist geöffnet"];

export function MainzBetaSection() {
  return (
    <section id="mainz" className="scroll-mt-24 bg-[#fffaf3] px-5 pb-14 pt-4 sm:px-8 lg:px-10 lg:pb-20 lg:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="piatto-card-glow rounded-[1.65rem] border border-piatto-line bg-piatto-card p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-piatto-terracotta">Beta</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-piatto-ink sm:text-5xl">
                Start in Mainz.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-piatto-muted">
                Piatto startet fokussiert in Mainz. Danach wird die Plattform Schritt für Schritt in Rhein-Main wachsen.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-piatto-line bg-white px-3 py-1.5 text-sm font-semibold text-piatto-muted shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
