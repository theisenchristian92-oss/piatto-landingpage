import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, routeItemListSchema } from "@/components/seo/schema";
import { AnswerBox, CategoryLinks, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { dishCategories, metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Gute Gerichte in Mainz finden | Piatto",
  description:
    "Entdecke Gerichte in Mainz auf Gerichtsebene. Piatto zeigt konkrete Gerichte mit Restaurant-Kontext und spaeter echten Bewertungen.",
  path: "/beste-gerichte-mainz",
});

export default function BestDishesMainzPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Piatto", path: "/" },
            { name: "Gute Gerichte in Mainz", path: "/beste-gerichte-mainz" },
          ]),
          routeItemListSchema(
            "Dish-first Kategorien in Mainz",
            dishCategories.map((category) => ({ name: `${category.plural} in Mainz`, path: `/mainz/${category.slug}` })),
          ),
        ]}
      />
      <SeoHero
        eyebrow="Mainz"
        title="Gute Gerichte in Mainz entdecken"
        intro="Piatto baut eine dish-first Uebersicht fuer Mainz auf. Statt pauschaler Restaurantlisten stehen konkrete Gerichte im Mittelpunkt."
        answer="Piatto behauptet keine besten Gerichte ohne echte Bewertungen. Die Seite bereitet eine transparente Uebersicht vor, in der Gerichte spaeter nach echten Bewertungen sichtbar werden."
      />
      <SeoSection title="Was bedeutet beste Gerichte ohne Fake-Bewertungen?">
        <AnswerBox>
          Solange noch keine echten Bewertungen vorliegen, spricht Piatto von Gerichten finden, entdecken und vergleichen. Bestbewertete Listen entstehen erst aus echten
          Nutzerdaten.
        </AnswerBox>
      </SeoSection>
      <SeoSection title="Gerichte in Mainz">
        <CategoryLinks />
      </SeoSection>
    </SeoPageShell>
  );
}

