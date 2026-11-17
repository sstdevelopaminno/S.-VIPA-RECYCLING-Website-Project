import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { isLocale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { localizedAlternates, localizedPath, type SiteRoute } from "@/lib/site";

const pageRoutes = ["about", "services", "materials", "news", "contact"] as const satisfies readonly SiteRoute[];

type Props = {
  params: Promise<{ locale: string; page: string }>;
};

function isPageRoute(page: string): page is SiteRoute {
  return pageRoutes.some((route) => route === page);
}

export function generateStaticParams() {
  return pageRoutes.map((page) => ({ page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isPageRoute(page)) return {};
  const copy = getDictionary(locale).pageMeta[page];
  const path = localizedPath(locale, page);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: localizedAlternates(page),
    },
    openGraph: {
      url: path,
      title: copy.title,
      description: copy.description,
    },
  };
}

function PageHero({ copy, page }: { copy: Dictionary["pageMeta"][SiteRoute]; page: SiteRoute }) {
  const icon = page === "about" ? "recycle" : page === "services" ? "truck" : page === "materials" ? "box" : page === "news" ? "paper" : "phone";

  return (
    <section className={`page-hero page-hero-${page}`}>
      <div className="wrap page-hero-grid">
        <div>
          <p className="page-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
        <div className="page-hero-icon" aria-hidden="true"><Icon name={icon} /></div>
      </div>
    </section>
  );
}

function AboutPage({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="inner-section about-section">
      <div className="wrap content-grid">
        <div>
          <p className="eyebrow">{dictionary.about.eyebrow}</p>
          <h2>{dictionary.about.title}</h2>
          <p>{dictionary.about.description}</p>
          <div className="feature-list">
            {dictionary.about.features.map((feature) => <p key={feature.text}><Icon name={feature.icon} />{feature.text}</p>)}
          </div>
        </div>
        <div className="about-visual" aria-label={dictionary.about.visualLabel}><Icon name="recycle" /></div>
      </div>
      <div className="wrap value-grid">
        {dictionary.why.features.map((feature) => (
          <article className="value-card" key={feature.title}>
            <Icon name={feature.icon} />
            <h3>{feature.title}</h3>
            <p>{feature.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesPage({ dictionary, locale }: { dictionary: Dictionary; locale: string }) {
  return (
    <section className="inner-section service-section">
      <div className="wrap">
        <p className="eyebrow">{dictionary.services.eyebrow}</p>
        <h2>{dictionary.services.title}</h2>
        <p className="section-copy">{dictionary.services.description}</p>
        <div className="step-grid">
          {dictionary.services.steps.map((step) => (
            <article className="step-card" key={step.step}>
              <span>{step.step}</span><h3>{step.title}</h3><p>{step.detail}</p>
            </article>
          ))}
        </div>
        <div className="page-cta">
          <div><strong>{dictionary.contact.title[0]}</strong><p>{dictionary.contact.description}</p></div>
          <Link className="cta cta-green" href={`/${locale}/contact`}><Icon name="quote" />{dictionary.hero.quote}</Link>
        </div>
      </div>
    </section>
  );
}

function MaterialsPage({ dictionary, locale }: { dictionary: Dictionary; locale: string }) {
  return (
    <section className="inner-section materials-page">
      <div className="wrap">
        <h2 className="section-h">{dictionary.materials.title}</h2>
        <p className="section-sub">{dictionary.materials.subtitle}</p>
        <div className="materials-grid materials-grid-full">
          {dictionary.materials.items.map((item) => (
            <Link href={`/${locale}/contact`} className="material-card" key={item.image}>
              <Image src={`/assets/${item.image}`} alt={item.alt} width={420} height={250} sizes="(max-width: 760px) 50vw, (max-width: 1140px) 33vw, 17vw" />
              <div className="material-info"><Icon name={item.icon} /><span><h3>{item.title}</h3><small>{item.detail}</small></span></div>
            </Link>
          ))}
        </div>
        <div className="material-note"><Icon name="quote" /><p>{dictionary.services.steps[0].detail}</p></div>
      </div>
    </section>
  );
}

function NewsPage({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="inner-section news-section">
      <div className="wrap">
        <p className="eyebrow">{dictionary.news.eyebrow}</p>
        <h2>{dictionary.news.title}</h2>
        <div className="news-panel"><h3>{dictionary.news.panelTitle}</h3><p>{dictionary.news.description}</p></div>
        <div className="article-grid">
          {dictionary.news.articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{article.title}</h3>
              <p>{article.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="inner-section contact-section">
      <div className="wrap content-grid contact-columns">
        <div>
          <p className="eyebrow">{dictionary.contact.eyebrow}</p>
          <h2>{dictionary.contact.title[0]}<br />{dictionary.contact.title[1]}</h2>
          <p>{dictionary.contact.description}</p>
          {dictionary.contact.info.map((info) => (
            <div className="contact-info" key={info.title}>
              <Icon name={info.icon} />
              <span>
                <b>{info.title}</b>
                {info.lines.map((line) => line.includes("@")
                  ? <small key={line}><a className="real-contact-link" href={`mailto:${line}`}>{line}</a></small>
                  : <small key={line}>{line}</small>)}
              </span>
            </div>
          ))}
        </div>
        <QuoteForm copy={dictionary.quoteForm} />
      </div>
    </section>
  );
}

export default async function ContentPage({ params }: Props) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isPageRoute(page)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <main className="inner-page">
      <PageHero copy={dictionary.pageMeta[page]} page={page} />
      {page === "about" && <AboutPage dictionary={dictionary} />}
      {page === "services" && <ServicesPage dictionary={dictionary} locale={locale} />}
      {page === "materials" && <MaterialsPage dictionary={dictionary} locale={locale} />}
      {page === "news" && <NewsPage dictionary={dictionary} />}
      {page === "contact" && <ContactPage dictionary={dictionary} />}
    </main>
  );
}
