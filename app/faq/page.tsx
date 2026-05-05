import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/components/seo/schema";
import { FaqList, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { coreFaq, metadataForPage } from "@/lib/seo";

const faqItems = [
  ...coreFaq,
  {
    question: "Kann ich bei Piatto das beste Schnitzel in Mainz finden?",
    answer:
      "Piatto hilft dabei, Schnitzel in Mainz auf Gerichtsebene zu finden. Bestbewertete Schnitzel werden erst angezeigt, wenn echte Bewertungen vorliegen.",
  },
  {
    question: "Warum sollte ich Gerichte statt Restaurants vergleichen?",
    answer:
      "Weil ein Restaurant viele unterschiedliche Gerichte anbietet. Piatto macht sichtbar, welches konkrete Gericht zu deinem Craving passt.",
  },
];

export const metadata: Metadata = metadataForPage({
  title: "Piatto FAQ | Dish-first Food Discovery",
  description: "Antworten zu Piatto, dish-first Food Discovery, Mainz Beta, Bewertungen und der Frage, ob Piatto eine Liefer-App ist.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Piatto", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqItems),
        ]}
      />
      <SeoHero
        eyebrow="FAQ"
        title="Fragen zu Piatto"
        intro="Kurz beantwortet: was Piatto ist, was dish-first bedeutet und wie die Mainz Beta startet."
        answer="Piatto ist eine dish-first Food Discovery Plattform fuer Mainz. Nutzer entdecken konkrete Gerichte statt nur Restaurants."
      />
      <SeoSection title="Haeufige Fragen">
        <FaqList items={faqItems} />
      </SeoSection>
    </SeoPageShell>
  );
}

