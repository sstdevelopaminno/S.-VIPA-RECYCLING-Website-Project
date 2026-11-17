import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { IconSprite } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";
import { localizedAlternates, localizedPath, siteUrl } from "@/lib/site";
import "../globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-noto-thai",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dictionary.meta.title,
      template: `%s | ${dictionary.brand.name}`,
    },
    description: dictionary.meta.description,
    alternates: {
      canonical: localizedPath(locale),
      languages: localizedAlternates(),
    },
    openGraph: {
      type: "website",
      locale: locale === "th" ? "th_TH" : "en_US",
      url: localizedPath(locale),
      siteName: dictionary.brand.company,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: [{ url: "/assets/hero-recycling.jpg", width: 1600, height: 900, alt: dictionary.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      images: ["/assets/hero-recycling.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dictionary.brand.company,
    alternateName: dictionary.brand.name,
    url: `${siteUrl}/${locale}`,
    logo: `${siteUrl}/assets/svp-logo.png`,
    email: "s.viparecycling@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "th" ? "508/3 หมู่ที่ 1 ตำบลบ้านใหม่" : "508/3 Moo 1, Ban Mai",
      addressLocality: locale === "th" ? "อำเภอเมืองปทุมธานี" : "Mueang Pathum Thani",
      addressRegion: locale === "th" ? "ปทุมธานี" : "Pathum Thani",
      postalCode: "12000",
      addressCountry: "TH",
    },
  };

  return (
    <html lang={locale} className={notoSansThai.variable}>
      <body>
        <IconSprite />
        <SiteHeader
          locale={locale}
          copy={{
            brand: dictionary.brand,
            nav: dictionary.nav,
            menuOpen: dictionary.menuOpen,
            menuClose: dictionary.menuClose,
            language: dictionary.language,
          }}
        />
        <div className="site-shell">{children}</div>
        <SiteFooter copy={dictionary.footer} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
