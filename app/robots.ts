import type { MetadataRoute } from "next";
import { siteProfile } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const origin = siteProfile.seo.metadataBase.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
