"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  copy: Pick<Dictionary, "brand" | "nav" | "menuOpen" | "menuClose" | "language">;
};

export function SiteHeader({ locale, copy }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function localeHref(nextLocale: Locale) {
    const suffix = pathname.replace(/^\/(th|en)/, "");
    return `/${nextLocale}${suffix || ""}`;
  }

  function navigationHref(route: string) {
    return route === "home" ? `/${locale}` : `/${locale}/${route}`;
  }

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link className="brand" href={`/${locale}`} aria-label={copy.brand.aria}>
          <Image className="brand-logo" src="/assets/svp-logo.png" alt={copy.brand.logoAlt} width={66} height={60} priority />
          <span>
            <span className="brand-th">{copy.brand.name}</span>
            <span className="brand-en">{copy.brand.company}</span>
          </span>
        </Link>
        <div className="brand-divider" />
        <p className="brand-promise">{copy.brand.promise[0]}<br />{copy.brand.promise[1]}</p>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? copy.menuClose : copy.menuOpen}
          aria-controls="navLinks"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "×" : "☰"}
        </button>
        <nav className={`nav-links${isOpen ? " open" : ""}`} id="navLinks" aria-label={copy.menuOpen}>
          {copy.nav.map((item) => {
            const href = navigationHref(item.href);
            const isActive = pathname === href || (item.href === "home" && pathname === `${href}/`);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "active" : undefined}
                href={href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="language-switcher" role="group" aria-label={copy.language}>
          <Link
            aria-current={locale === "th" ? "page" : undefined}
            className={locale === "th" ? "active" : undefined}
            href={localeHref("th")}
            hrefLang="th"
            lang="th"
            replace
            scroll={false}
            onClick={(event) => {
              setIsOpen(false);
              if (locale === "th") event.preventDefault();
            }}
          >TH</Link>
          <span aria-hidden="true">/</span>
          <Link
            aria-current={locale === "en" ? "page" : undefined}
            className={locale === "en" ? "active" : undefined}
            href={localeHref("en")}
            hrefLang="en"
            lang="en"
            replace
            scroll={false}
            onClick={(event) => {
              setIsOpen(false);
              if (locale === "en") event.preventDefault();
            }}
          >EN</Link>
        </div>
      </div>
    </header>
  );
}
