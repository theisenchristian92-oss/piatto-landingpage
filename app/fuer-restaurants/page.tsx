import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Piatto fuer Restaurants | Gerichte sichtbar machen",
  description:
    "Piatto macht konkrete Gerichte von Restaurants auffindbar. Restaurants in Mainz koennen ihre besten Gerichte sichtbar machen.",
  path: "/fuer-restaurants",
});

export default function RestaurantsPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Piatto", path: "/" },
          { name: "Fuer Restaurants", path: "/fuer-restaurants" },
        ])}
      />
      <SeoHero
        eyebrow="Fuer Restaurants"
        title="Machen Sie Ihre Gerichte sichtbar"
        intro="Piatto zeigt nicht nur Restaurantprofile. Die Plattform macht einzelne Gerichte auffindbar, speicherbar und spaeter bewertbar."
        answer="Restaurants werden bei Piatto ueber konkrete Gerichte entdeckt. Das kann spaeter helfen, Nachfrage, Sichtbarkeit und Produktfeedback besser zu verstehen."
      />
      <SeoSection title="Warum dish-first fuer Restaurants?">
        <p>
          Viele Gaeste suchen nicht abstrakt nach einem Restaurant, sondern nach einem Gericht. Piatto verbindet diese Nachfrage mit dem passenden Restaurant-Kontext.
        </p>
      </SeoSection>
      <SeoSection title="Was Piatto nicht ist">
        <p>
          Piatto startet nicht als Liefer-, Payment- oder Reservierungsplattform. Der Fokus liegt auf Discovery, Suche, Feed, Favoriten und Bewertungen.
        </p>
      </SeoSection>
    </SeoPageShell>
  );
}

