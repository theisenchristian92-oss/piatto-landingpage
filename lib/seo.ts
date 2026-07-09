import type { Metadata } from "next";

export const siteName = "Piatto";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://piatto.world").replace(/\/$/, "");

export type DishCategory = {
  slug: string;
  dish: string;
  plural: string;
  title: string;
  description: string;
  examples: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const dishCategories: DishCategory[] = [
  {
    slug: "schnitzel",
    dish: "Schnitzel",
    plural: "Schnitzel",
    title: "Schnitzel in Mainz finden | Piatto",
    description:
      "Finde Schnitzel in Mainz auf Gerichtsebene. Piatto zeigt konkrete Gerichte mit Restaurant, Preis, Beschreibung und spaeter echten Bewertungen.",
    examples: ["Schnitzel Wiener Art", "Schnitzel mit Kartoffelsalat", "Rahmschnitzel", "Schnitzel mit Gurkensalat"],
    faq: [
      {
        question: "Kann ich bei Piatto das beste Schnitzel in Mainz finden?",
        answer:
          "Piatto hilft dabei, Schnitzel in Mainz auf Gerichtsebene zu finden und zu vergleichen. Sobald echte Bewertungen vorliegen, koennen daraus bestbewertete Schnitzel sichtbar werden.",
      },
      {
        question: "Warum sind Gerichtsbewertungen bei Schnitzel sinnvoll?",
        answer:
          "Ein Restaurant kann insgesamt gut bewertet sein, obwohl ein einzelnes Schnitzel nicht ueberzeugt. Dish-first Bewertungen machen genau dieses Gericht sichtbar.",
      },
    ],
  },
  {
    slug: "burger",
    dish: "Burger",
    plural: "Burger",
    title: "Burger in Mainz finden | Piatto",
    description:
      "Finde Burger in Mainz auf Gerichtsebene. Piatto zeigt konkrete Burger mit Restaurant-Kontext, Beschreibung und spaeter echten Bewertungen.",
    examples: ["Cheeseburger", "Smash Burger", "Veggie Burger", "Chicken Burger"],
    faq: [
      {
        question: "Wie finde ich gute Burger in Mainz?",
        answer:
          "Piatto ordnet Burger als konkrete Gerichte ein. So koennen Nutzer spaeter Burger nach Restaurant, Preis, Beschreibung und Bewertung vergleichen.",
      },
      {
        question: "Vergleicht Piatto Burger oder Restaurants?",
        answer:
          "Piatto denkt zuerst in Gerichten. Restaurants bleiben wichtig, sind aber Kontext, Quelle und Ort des jeweiligen Burgers.",
      },
    ],
  },
  {
    slug: "pasta",
    dish: "Pasta",
    plural: "Pasta",
    title: "Pasta in Mainz finden | Piatto",
    description:
      "Finde Pasta in Mainz auf Gerichtsebene. Piatto macht konkrete Pasta-Gerichte suchbar, speicherbar und spaeter bewertbar.",
    examples: ["Pasta al Ragu", "Pasta Arrabbiata", "Truffle Tagliatelle", "Pasta mit Meeresfruechten"],
    faq: [
      {
        question: "Warum Pasta auf Gerichtsebene suchen?",
        answer:
          "Pasta-Gerichte unterscheiden sich stark nach Sauce, Zutaten und Zubereitung. Piatto macht diese Unterschiede sichtbar statt nur Restaurantlisten zu zeigen.",
      },
      {
        question: "Kann ich Pasta in Mainz speichern?",
        answer:
          "Ja. Piatto ist auf Discovery, Suche, Feed, Favoriten und Bewertungen ausgelegt. Nutzer koennen Gerichte fuer spaeter speichern.",
      },
    ],
  },
  {
    slug: "sushi",
    dish: "Sushi",
    plural: "Sushi",
    title: "Sushi in Mainz finden | Piatto",
    description:
      "Finde Sushi in Mainz auf Gerichtsebene. Piatto zeigt konkrete Sushi-Gerichte mit Restaurant-Kontext und spaeter echten Bewertungen.",
    examples: ["Nigiri", "Maki", "Inside-Out Rolls", "Sashimi"],
    faq: [
      {
        question: "Wie hilft Piatto bei Sushi in Mainz?",
        answer:
          "Piatto zeigt Sushi nicht nur als Restaurantkategorie, sondern als konkrete Gerichte, die gesucht, gespeichert und bewertet werden koennen.",
      },
      {
        question: "Gibt es bei Piatto Lieferoptionen fuer Sushi?",
        answer:
          "Nein. Piatto startet als Discovery-Plattform. Bestellung, Payment und Reservierung gehoeren nicht zum MVP.",
      },
    ],
  },
  {
    slug: "pizza",
    dish: "Pizza",
    plural: "Pizza",
    title: "Pizza in Mainz finden | Piatto",
    description:
      "Finde Pizza in Mainz auf Gerichtsebene. Piatto zeigt konkrete Pizza-Gerichte mit Restaurant-Kontext, Beschreibung und spaeter Bewertungen.",
    examples: ["Pizza Margherita", "Pizza Salami", "Pizza Burrata", "Pizza vegetarisch"],
    faq: [
      {
        question: "Warum Pizza nicht nur ueber Restaurants suchen?",
        answer:
          "Nutzer haben oft Lust auf eine konkrete Pizza, nicht auf eine allgemeine Restaurantliste. Piatto macht einzelne Pizza-Gerichte auffindbar.",
      },
      {
        question: "Zeigt Piatto echte Bewertungen fuer Pizza?",
        answer:
          "Echte Bewertungen sind Teil des Produkts. Auf SEO-Seiten werden Bewertungen erst angezeigt, wenn sie tatsaechlich vorhanden sind.",
      },
    ],
  },
];

export const publicRoutes = [
  "/",
  "/mainz",
  ...dishCategories.map((category) => `/mainz/${category.slug}`),
  "/beste-gerichte-mainz",
  "/was-ist-dish-first",
  "/fuer-gaeste",
  "/fuer-restaurants",
  "/faq",
  "/datenschutz",
  "/impressum",
  "/kontakt",
];

export const coreFaq = [
  {
    question: "Was ist Piatto?",
    answer:
      "Piatto ist eine dish-first Food Discovery Plattform. Im Mittelpunkt stehen konkrete Gerichte statt nur Restaurants.",
  },
  {
    question: "Was bedeutet dish-first?",
    answer:
      "Dish-first bedeutet: Nutzer suchen, vergleichen, speichern und bewerten konkrete Gerichte. Restaurants sind Kontext, Quelle und Ort.",
  },
  {
    question: "Wo startet Piatto?",
    answer: "Piatto startet fokussiert in Mainz. Danach waechst die Plattform Schritt fuer Schritt in Rhein-Main.",
  },
  {
    question: "Bewertet Piatto Restaurants oder Gerichte?",
    answer: "Piatto konzentriert sich auf Gerichtsbewertungen. Restaurantinformationen helfen dabei, das Gericht einzuordnen.",
  },
  {
    question: "Ist Piatto eine Liefer-App?",
    answer: "Nein. Piatto startet als Discovery-Plattform. Bestellung, Payment und Reservierung sind nicht Teil des MVP.",
  },
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function metadataForPage({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      type: "website",
    },
  };
}

export function categoryBySlug(slug: string) {
  return dishCategories.find((category) => category.slug === slug);
}
