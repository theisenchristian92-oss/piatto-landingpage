import { absoluteUrl, coreFaq, siteName, siteUrl, type DishCategory } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description: "Dish-first Food Discovery Plattform fuer Mainz.",
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/mainz/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function webApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteName,
    url: siteUrl,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web, iOS, Android",
    description: "Piatto macht konkrete Gerichte in Mainz suchbar, speicherbar und bewertbar.",
  };
}

export function faqSchema(faq = coreFaq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function categoryItemListSchema(category: DishCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.plural} in Mainz`,
    itemListElement: category.examples.map((example, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: example,
      url: absoluteUrl(`/mainz/${category.slug}`),
    })),
  };
}

export function routeItemListSchema(title: string, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

