import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, routeItemListSchema } from "@/components/seo/schema";
import { AnswerBox, CategoryLinks, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { dishCategories, metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Gerichte in Mainz finden | Piatto",
  description:
    "Piatto macht Gerichte in Mainz auf Gerichtsebene sichtbar. Finde Schnitzel, Burger, Pasta, Sushi und Pizza mit Restaurant-Kontext.",
  path: "/mainz",
});

export default function MainzPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Piatto", path: "/" },
            { name: "Mainz", path: "/mainz" },
          ]),
          routeItemListSchema(
            "Gerichte in Mainz",
            dishCategories.map((category) => ({
              name: `${category.plural} in Mainz`,
              path: `/mainz/${category.slug}`,
            })),
          ),
        ]}
      />
      <SeoHero
        eyebrow="Mainz Beta"
        title="Gerichte in Mainz finden"
        intro="Piatto startet in Mainz als dish-first Food Discovery Plattform. Nutzer suchen nicht nur Restaurants, sondern konkrete Gerichte in ihrer Naehe."
        answer="Piatto zeigt Gerichte auf Gerichtsebene. Dadurch koennen Nutzer konkrete Schnitzel, Burger, Pasta, Sushi oder Pizza nach Restaurant, Beschreibung und spaeter Bewertung vergleichen."
      />
      <SeoSection title="Was zeigt Piatto in Mainz?">
        <p>
          Piatto macht einzelne Gerichte sichtbar. Ein Restaurant bleibt wichtig, aber es ist Kontext, Quelle und Ort. Die Suche beginnt beim Craving: Schnitzel, Burger,
          Pasta, Sushi oder Pizza.
        </p>
      </SeoSection>
      <SeoSection title="Lokale Dish-Kategorien">
        <CategoryLinks />
      </SeoSection>
      <SeoSection title="Warum dish-first fuer Mainz?">
        <AnswerBox>
          Restaurantbewertungen sagen selten, welches konkrete Gericht wirklich gut ist. Piatto schliesst diese Luecke, indem Gerichte suchbar, speicherbar und bewertbar
          werden.
        </AnswerBox>
      </SeoSection>
    </SeoPageShell>
  );
}

