import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { dishCategories } from "@/lib/seo";

type LinkCard = {
  href: string;
  title: string;
  text: string;
};

export function SeoPageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-piatto-ink">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export function SeoHero({
  eyebrow,
  title,
  intro,
  answer,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  answer: string;
}) {
  return (
    <section className="piatto-texture px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piatto-terracotta">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-piatto-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-piatto-muted">{intro}</p>
        <AnswerBox>{answer}</AnswerBox>
      </div>
    </section>
  );
}

export function SeoSection({
  id,
  title,
  children,
}: Readonly<{
  id?: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-piatto-olive sm:text-3xl">{title}</h2>
        <div className="mt-5 text-base leading-7 text-piatto-muted">{children}</div>
      </div>
    </section>
  );
}

export function AnswerBox({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-7 rounded-[1.25rem] border border-piatto-line bg-white/78 p-5 text-base font-semibold leading-7 text-piatto-ink shadow-sm">
      {children}
    </div>
  );
}

export function LinkGrid({ links }: { links: LinkCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="focus-ring rounded-[1.1rem] border border-piatto-line bg-white/78 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-piatto-terracotta/45">
          <h3 className="font-semibold text-piatto-ink">{link.title}</h3>
          <p className="mt-2 text-sm leading-6 text-piatto-muted">{link.text}</p>
        </a>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-[1.1rem] border border-piatto-line bg-white/78 p-5 shadow-sm">
          <summary className="cursor-pointer list-none font-semibold text-piatto-ink">
            {item.question}
            <span className="float-right text-piatto-terracotta group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-piatto-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CategoryLinks() {
  return (
    <LinkGrid
      links={[
        ...dishCategories.map((category) => ({
          href: `/mainz/${category.slug}`,
          title: `${category.plural} in Mainz`,
          text: `Konkrete ${category.plural}-Gerichte auf Gerichtsebene finden und vergleichen.`,
        })),
        {
          href: "/beste-gerichte-mainz",
          title: "Gute Gerichte in Mainz",
          text: "Eine dish-first Uebersicht fuer Mainz, ohne Fake-Bewertungen.",
        },
      ]}
    />
  );
}

