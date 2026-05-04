import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Piatto | Entdecke Gerichte, nicht nur Restaurants",
  description:
    "Piatto ist die dish-first Food Discovery Plattform fuer Mainz. Entdecken, speichern und bewerten Sie konkrete Gerichte in Ihrer Naehe.",
  openGraph: {
    title: "Piatto | Entdecke Gerichte, nicht nur Restaurants",
    description:
      "Piatto ist die dish-first Food Discovery Plattform fuer Mainz. Entdecken, speichern und bewerten Sie konkrete Gerichte in Ihrer Naehe.",
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
