import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/components/seo/schema";
import { CategoryLinks, SeoHero, SeoPageShell, SeoSection } from "@/components/seo/seo-page";
import { metadataForPage } from "@/lib/seo";

export const metadata: Metadata = metadataForPage({
  title: "Piatto fuer Gaeste | Gerichte in Mainz entdecken",
  description: "Finde konkrete Gerichte in Mainz schneller. Piatto hilft Gaesten, Gerichte zu suchen, zu speichern und spaeter zu bewerten.",
  path: "/fuer-gaeste",
});

export default function GuestsPage() {
  return (
    <SeoPageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Piatto", path: "/" },
          { name: "Fuer Gaeste", path: "/fuer-gaeste" },
        ])}
      />
      <SeoHero
        eyebrow="Fuer Gaeste"
        title="Finde schneller, worauf du Lust hast"
        intro="Piatto hilft Gaesten, konkrete Gerichte in Mainz zu entdecken, zu speichern und spaeter zu bewerten."
        answer="Wer Lust auf Schnitzel, Burger, Pasta, Sushi oder Pizza hat, soll bei Piatto konkrete Gerichte finden statt nur Restaurantlisten zu scrollen."
      />
      <SeoSection title="Gerichte statt Listen">
        <p>
          Piatto zeigt Restaurantinformationen nur dort, wo sie helfen: beim Einordnen eines konkreten Gerichts. Die Suche bleibt dish-first.
        </p>
      </SeoSection>
      <SeoSection title="Gerichte in Mainz entdecken">
        <CategoryLinks />
      </SeoSection>
    </SeoPageShell>
  );
}

