import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, categoryItemListSchema, faqSchema } from "@/components/seo/schema";
import { CategoryLinks, FaqList, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { categoryBySlug, dishCategories, metadataForPage } from "@/lib/seo";

export function generateStaticParams() {
  return dishCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return metadataForPage({
    title: category.title,
    description: category.description,
    path: `/mainz/${category.slug}`,
  });
}

export default async function DishCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryFaq = [
    ...category.faq,
    {
      question: "Bewertet Piatto Restaurants oder Gerichte?",
      answer:
        "Piatto bewertet und vergleicht vor allem konkrete Gerichte. Restaurants bleiben als Kontext sichtbar, damit Nutzer Ort, Quelle und Angebot einordnen koennen.",
    },
    {
      question: "Ist Piatto eine Liefer-App?",
      answer: "Nein. Piatto ist im MVP eine Discovery-Plattform fuer Suche, Feed, Favoriten und Bewertungen.",
    },
  ];

  return (
    <SeoPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Piatto", path: "/" },
            { name: "Mainz", path: "/mainz" },
            { name: `${category.plural} in Mainz`, path: `/mainz/${category.slug}` },
          ]),
          categoryItemListSchema(category),
          faqSchema(categoryFaq),
        ]}
      />
      <SeoHero
        eyebrow="Dish-first Mainz"
        title={`${category.plural} in Mainz finden`}
        intro={`Piatto zeigt ${category.plural} in Mainz auf Gerichtsebene. Nutzer sehen konkrete Gerichte mit Restaurant, Beschreibung und spaeter echten Bewertungen.`}
        answer={`Piatto zeigt ${category.plural} auf Gerichtsebene. Dadurch koennen Nutzer konkrete Gerichte nach Restaurant, Beschreibung, Preis und Bewertung vergleichen, sobald echte Daten vorliegen.`}
      />
      <SeoSection title={`Was zeigt Piatto bei ${category.plural}?`}>
        <p>
          Piatto sammelt keine allgemeine Restaurantliste, sondern strukturiert konkrete Gerichte. Fuer {category.plural} bedeutet das: einzelne Varianten werden auffindbar,
          vergleichbar und speicherbar.
        </p>
      </SeoSection>
      <SeoSection title="Warum Gerichtsbewertungen besser sind als reine Restaurantbewertungen">
        <p>
          Ein Restaurant kann insgesamt gut bewertet sein, waehrend einzelne Gerichte unterschiedlich gut abschneiden. Dish-first macht die Qualitaet einzelner Gerichte
          sichtbar, ohne Restaurantdaten zu ersetzen.
        </p>
      </SeoSection>
      <SeoSection title={`${category.plural}-Gerichte in Mainz`}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {category.examples.map((example) => (
            <li key={example} className="rounded-[1rem] border border-piatto-line bg-white/78 p-4 font-semibold text-piatto-ink shadow-sm">
              {example}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-6">
          Hinweis: Diese Beispiele beschreiben Gerichtstypen. Echte Restaurant- und Bewertungsdaten werden erst angezeigt, wenn sie freigegeben und verifiziert sind.
        </p>
      </SeoSection>
      <SeoSection title={`Haeufige Fragen zu ${category.plural} in Mainz`}>
        <FaqList items={categoryFaq} />
      </SeoSection>
      <SeoSection title="Weitere Gerichte in Mainz">
        <CategoryLinks />
      </SeoSection>
    </SeoPageShell>
  );
}
