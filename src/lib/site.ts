export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://s-vipa-recycling.vercel.app";

export const siteRoutes = ["", "about", "services", "materials", "news", "contact"] as const;
export type SiteRoute = Exclude<(typeof siteRoutes)[number], "">;

export function localizedPath(locale: string, route = "") {
  return `/${locale}${route ? `/${route}` : ""}`;
}

export function localizedAlternates(route = "") {
  return {
    th: localizedPath("th", route),
    en: localizedPath("en", route),
    "x-default": localizedPath("th", route),
  };
}
