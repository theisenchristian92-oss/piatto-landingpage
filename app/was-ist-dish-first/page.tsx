import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/components/seo/schema";
import { AnswerBox, FaqList, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { coreFaq, metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Dish-first Food Discovery erklaert | Piatto",
  description:
    "Dish-first Food Discovery bedeutet: Nutzer entdecken konkrete Gerichte statt nur Restaurants. Piatto startet damit in Mainz.",
  path: "/dish-first-food-discovery",
});

export default function DishFirstPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Piatto", path: "/" },
            { name: "Dish-first Food Discovery", path: "/dish-first-food-discovery" },
          ]),
          faqSchema(coreFaq),
        ]}
      />
      <SeoHero
        eyebrow="Piatto Prinzip"
        title="Dish-first Food Discovery"
        intro="Piatto denkt Food Discovery vom Gericht aus. Nutzer suchen nicht zuerst eine Restaurantliste, sondern das konkrete Gericht, auf das sie Lust haben."
        answer="Dish-first bedeutet: Das Gericht steht im Fokus. Restaurant, Ort, Preis und Bewertung liefern den Kontext."
      />
      <SeoSection title="Warum nicht nur bestehende Restaurantbewertungen nutzen?">
        <p>
          Restaurantbewertungen sind hilfreich, aber sie beantworten selten die konkrete Frage nach einem einzelnen Gericht. Piatto macht diese Ebene sichtbar und
          durchsuchbar.
        </p>
      </SeoSection>
      <SeoSection title="Was gehoert zum MVP?">
        <AnswerBox>Der MVP umfasst Discovery, Suche, Feed, Favoriten und Bewertungen. Bestellung, Payment und Reservierung sind nicht Teil des MVP.</AnswerBox>
      </SeoSection>
      <SeoSection title="FAQ">
        <FaqList items={coreFaq} />
      </SeoSection>
    </SeoPageShell>
  );
}

