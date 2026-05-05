import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/dashboard/", "/admin/", "/cockpit/", "/login/"];

  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot"],
        allow: "/",
        disallow,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}

