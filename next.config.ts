import type { NextConfig } from "next";
import path from "node:path";

// Piatto-App (Projekt „piatto-app") läuft mit basePath /dish-first-food-discovery
// und wird hier unter www.piatto.world/dish-first-food-discovery durchgereicht.
const PIATTO_APP_ORIGIN = "https://piatto-app.vercel.app";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/dish-first-food-discovery",
        destination: `${PIATTO_APP_ORIGIN}/dish-first-food-discovery`,
      },
      {
        source: "/dish-first-food-discovery/:path*",
        destination: `${PIATTO_APP_ORIGIN}/dish-first-food-discovery/:path*`,
      },
    ];
  },
};

export default nextConfig;
