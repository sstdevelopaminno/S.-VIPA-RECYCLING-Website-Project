import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { localizedAlternates, localizedPath, siteRoutes, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    siteRoutes.map((route) => {
      const path = localizedPath(locale, route);
      return {
        url: new URL(path, siteUrl).toString(),
        lastModified: new Date(),
        changeFrequency: route === "news" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "contact" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(localizedAlternates(route)).map(([language, alternatePath]) => [language, new URL(alternatePath, siteUrl).toString()]),
          ),
        },
      };
    }),
  );
}
