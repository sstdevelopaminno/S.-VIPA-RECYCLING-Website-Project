import Image from "next/image";
import { notFound } from "next/navigation";
import { BackToTop } from "@/components/back-to-top";
import { Icon, IconSprite } from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <>
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
      <main id="home">
        <section className="hero" aria-labelledby="heroTitle">
          <div className="hero-image">
            <Image
              className="hero-image-media"
              src="/assets/hero-recycling.jpg"
              alt={dictionary.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 67vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-ornament ornament-a" />
          <div className="hero-ornament ornament-b" />
          <div className="hero-ornament ornament-c" />
          <div className="wrap">
            <div className="hero-content">
              <h1 id="heroTitle">{dictionary.hero.title}</h1>
              <p className="hero-en">{dictionary.hero.company}</p>
              <p className="hero-slogan">{dictionary.hero.slogan[0]}<br />{dictionary.hero.slogan[1]}</p>
              <div className="hero-services">
                {dictionary.hero.services.map((service) => (
                  <div className="hero-service" key={service.lines.join("-")}>
                    <Icon name={service.icon} />
                    <span>{service.lines[0]}<br />{service.lines[1]}</span>
                  </div>
                ))}
              </div>
              <div className="hero-actions">
                <a className="cta cta-green" href="#contact"><Icon name="phone" />{dictionary.hero.contact}</a>
                <a className="cta cta-outline" href="#contact"><Icon name="quote" />{dictionary.hero.quote}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="materials" id="materials" aria-labelledby="materialTitle">
          <div className="wrap">
            <h2 className="section-h" id="materialTitle">{dictionary.materials.title}</h2>
            <p className="section-sub">{dictionary.materials.subtitle}</p>
            <div className="materials-grid">
              {dictionary.materials.items.map((item) => (
                <a href="#contact" className="material-card" key={item.image}>
                  <Image src={`/assets/${item.image}`} alt={item.alt} width={420} height={250} sizes="(max-width: 760px) 50vw, (max-width: 1140px) 33vw, 17vw" />
                  <div className="material-info">
                    <Icon name={item.icon} />
                    <span><h3>{item.title}</h3><small>{item.detail}</small></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="why" aria-label={dictionary.why.label}>
          <Image className="why-photo" src="/assets/recycling-hands.jpg" alt={dictionary.why.imageAlt} width={700} height={420} sizes="(max-width: 760px) 180px, 345px" />
          <div className="wrap">
            <div className="why-heading">
              <h2>{dictionary.why.title[0]}<br />{dictionary.why.title[1]}</h2>
              <div className="why-accent" />
            </div>
            <div className="why-features">
              {dictionary.why.features.map((feature) => (
                <div className="why-feature" key={feature.title}>
                  <Icon name={feature.icon} />
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-strip" aria-label={dictionary.contactStrip.label}>
          <div className="wrap">
            <div className="strip-item"><Icon name="phone" /><b>{dictionary.contactStrip.prompt[0]}<br />{dictionary.contactStrip.prompt[1]}</b></div>
            <div className="strip-item"><a className="strip-chip email" href="mailto:s.viparecycling@gmail.com">s.viparecycling@gmail.com</a></div>
            <div className="strip-item"><span className="pending-contact">{dictionary.contactStrip.pending[0]}<br /><small>{dictionary.contactStrip.pending[1]}</small></span></div>
            <div className="strip-item"><Icon name="location" /><span className="hours">{dictionary.contactStrip.address[0]}<br />{dictionary.contactStrip.address[1]}</span></div>
          </div>
        </section>

        <section className="about-section below" id="about">
          <div className="wrap content-grid">
            <div>
              <p className="eyebrow">{dictionary.about.eyebrow}</p>
              <h2>{dictionary.about.title}</h2>
              <p>{dictionary.about.description}</p>
              <div className="feature-list">
                {dictionary.about.features.map((feature) => <p key={feature.text}><Icon name={feature.icon} />{feature.text}</p>)}
              </div>
            </div>
            <div className="about-visual" aria-label={dictionary.about.visualLabel} />
          </div>
        </section>

        <section className="service-section below" id="services">
          <div className="wrap">
            <p className="eyebrow">{dictionary.services.eyebrow}</p>
            <h2>{dictionary.services.title}</h2>
            <p>{dictionary.services.description}</p>
            <div className="step-grid">
              {dictionary.services.steps.map((step) => (
                <article className="step-card" key={step.step}>
                  <span>{step.step}</span><h3>{step.title}</h3><p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="news-section below" id="news">
          <div className="wrap">
            <p className="eyebrow">{dictionary.news.eyebrow}</p>
            <h2>{dictionary.news.title}</h2>
            <div className="news-panel"><h3>{dictionary.news.panelTitle}</h3><p>{dictionary.news.description}</p></div>
          </div>
        </section>

        <section className="contact-section below" id="contact">
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
      </main>
      <footer className="footer">
        <div className="wrap">
          <div>
            <b>{dictionary.footer.brand}</b><br />
            <small>{dictionary.footer.office} · <a className="footer-mail" href="mailto:s.viparecycling@gmail.com">s.viparecycling@gmail.com</a></small><br />
            <small>{dictionary.footer.disclaimer}</small>
          </div>
          <BackToTop label={dictionary.footer.backTop} />
        </div>
      </footer>
    </>
  );
}
