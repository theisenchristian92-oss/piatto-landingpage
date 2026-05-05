import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Piatto | Entdecke Gerichte, nicht Restaurants",
  description:
    "Piatto ist die dish-first Food Discovery Plattform fuer Mainz. Finde sofort das beste Gericht in deiner Naehe.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Piatto | Entdecke Gerichte, nicht Restaurants",
    description:
      "Piatto ist die dish-first Food Discovery Plattform fuer Mainz. Finde sofort das beste Gericht in deiner Naehe.",
    url: absoluteUrl("/"),
    siteName: "Piatto",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
