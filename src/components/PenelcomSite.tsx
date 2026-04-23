"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  aboutParagraphs,
  heroImages,
  materialHighlights,
  services,
} from "@/data/content";

const navItems = [
  { label: "Domov", href: "#home" },
  { label: "Služby", href: "#services" },
  { label: "Kontakt", href: "#footer" },
] as const;

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M12 36h24V16L24 8 12 16v20zM16 32v-6h4v6h-4zM28 32v-6h4v6h-4z" fill="currentColor" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4L28 16h12l-10 8 4 12-10-8-10 8 4-12-10-8h12l4-12z" fill="currentColor" />
    </svg>
  );
}

export default function PenelcomSite() {
  const [activeHero, setActiveHero] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      const heroHeight = document.querySelector<HTMLElement>(".hero")?.offsetHeight ?? window.innerHeight;
      const triggerPoint = heroHeight * 0.3;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(window.scrollY > triggerPoint);
      setScrollProgress(documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const fillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fill-animate");
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    document
      .querySelectorAll<HTMLElement>(".about-title, .service-title, .materials-title, .section-title, .services-title")
      .forEach((title) => {
        revealObserver.observe(title);
        fillObserver.observe(title);
      });

    return () => {
      revealObserver.disconnect();
      fillObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", privacyOpen);

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [privacyOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPrivacyOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showSolidNav = isScrolled || menuOpen;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ height: `${scrollProgress}%` }} />
      </div>

      <nav className={`navbar ${showSolidNav ? "scrolled" : ""}`} aria-label="Hlavná navigácia">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" className="logo-link" onClick={closeMenu} aria-label="Penelcom domov">
              <img src="/assets/logo.png" alt="Penelcom" className="logo-img" />
            </a>
          </div>
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`hamburger ${menuOpen ? "active" : ""}`}
            aria-label={menuOpen ? "Zatvoriť menu" : "Otvoriť menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-background" aria-hidden="true">
          {heroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`hero-bg-image ${index === activeHero ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Elektrina a bezpečnosť pod kontrolou</h1>
            <p className="hero-subtitle">
              Spoľahlivý partner v elektrotechnických službách od roku 2012. Špecializujeme sa na
              elektroinštalácie, fotovoltiku, meranie a regulácie, NN rozvádzače a zabezpečovacie systémy.
            </p>
            <div className="hero-actions">
              <a href="#gallery" className="cta-btn primary">
                PROJEKTY
              </a>
              <a href="#services" className="cta-btn secondary">
                NAŠE SLUŽBY
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">
                  500<span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Úspešných projektov</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">13</div>
                <div className="stat-label">rokov skúseností</div>
              </div>
            </div>

            <div className="hero-testimonial">
              <blockquote>
                &quot;Realizovali nám kvalitný projekt s maximálnou starostlivosťou. Spokojnosť s prístupom,
                kvalitou a dodržaním termínov. Odporúčame PENELCOM každému.&quot;
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src="/assets/hero/meranie-1.jpeg" alt="Zákazník" />
                </div>
                <div className="author-info">
                  <span className="author-name">Ján M.</span>
                  <div className="author-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-score">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="more-testimonials">
              VIAC REFERENCIÍ
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-header">
                <span className="about-label">— Kto sme</span>
                <h2 className="about-title" data-text="Penelcom">
                  Penelcom s.r.o.
                </h2>
              </div>
              <div className="about-text">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <a href="#footer" className="about-btn">
                  Kontaktovať nás
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="about-right">
              <img src="/assets/services/fotovoltika/fotovoltika-1.jpeg" alt="VDL stavebné služby" className="about-image" />
              <div className="about-stats">
                <div className="stat-box stat-black">
                  <div className="stat-icon">
                    <HomeIcon />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">
                      500<span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">Úspešných projektov</div>
                  </div>
                </div>
                <div className="stat-box stat-yellow">
                  <div className="stat-icon">
                    <StarIcon />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">13</div>
                    <div className="stat-label">rokov skúseností</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          {services.map((service) => (
            <div className="service-section" key={service.title}>
              <div className={`service-content ${service.reverse ? "reverse" : ""}`}>
                <div className="service-text">
                  <h2 className="service-title" data-text={service.dataText}>
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                  <div className="service-details">
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-images">
                  <div className="image-group">
                    <div className="image-left">
                      <img src={service.images[0].src} alt={service.images[0].alt} className="service-image" />
                    </div>
                    <div className="image-right">
                      <img src={service.images[1].src} alt={service.images[1].alt} className="service-image" />
                      <img src={service.images[2].src} alt={service.images[2].alt} className="service-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="materials" className="materials-section">
        <div className="container">
          <div className="materials-content">
            <div className="materials-info">
              <div className="materials-header">
                <span className="materials-label">— Náš partner</span>
                <h2 className="materials-title" data-text="Elektroinštalačný">
                  Elektroinštalačný materiál
                </h2>
              </div>
              <div className="materials-text">
                <p>
                  Či už potrebujete káble, ističe, rozvádzače, osvetlenie alebo akékoľvek iné elektroinštalačné
                  komponenty, N-BAUER vám zabezpečí profesionálne poradenstvo a dodávku certifikovaných produktov
                  od overených výrobcov.
                </p>
                <div className="materials-highlights">
                  <ul>
                    {materialHighlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="materials-image">
              <img src="/assets/partner-card.png" alt="BAUER - Elektroinštalačný materiál" className="business-card" />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-cta-content">
              <h2>Potrebujete elektrotechnické služby?</h2>
              <p>Kontaktujte nás a my Vám radi poradíme</p>
            </div>
            <div className="footer-cta-button">
              <a href="tel:+421949654829" className="footer-btn">
                Zavolať
              </a>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-content">
            <div className="footer-section footer-contact">
              <h3>Penelcom s.r.o.</h3>
              <p>
                <strong>Adresa:</strong>
                <br />
                Sídlisko 1. mája 7/69
                <br />
                093 01 Vranov nad Topľou
              </p>
              <p>
                <strong>Kancelária:</strong>
                <br />
                Budovateľská 1288
                <br />
                093 01 Vranov nad Topľou (areál DMJ)
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:penelcom@penel.sk">info@penelcom.sk</a>
              </p>
              <p>
                <strong>Telefonický kontakt:</strong> <a href="tel:+421949654829">+421 949 654 829</a>
              </p>
            </div>

            <div className="footer-section footer-navigation">
              <div className="footer-nav-column">
                <h4>Navigácia</h4>
                <ul>
                  <li>
                    <a href="#home">Domov</a>
                  </li>
                  <li>
                    <a href="#services">Služby</a>
                  </li>
                  <li>
                    <a href="#footer">Kontakt</a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h4>Služby</h4>
                <ul>
                  {["Elektroinštalácie", "Meranie a regulácie", "Fotovoltika", "NN rozvádzače", "Zabezpečovacie systémy"].map(
                    (item) => (
                      <li key={item}>
                        <a href="#services">{item}</a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="footer-nav-column">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a
                      href="#privacy"
                      id="privacy-policy-link"
                      onClick={(event) => {
                        event.preventDefault();
                        setPrivacyOpen(true);
                      }}
                    >
                      Ochrana osobných údajov
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-credit">
              <a href="https://aebdigital.com" target="_blank" rel="noopener noreferrer" className="credit-link">
                Tvorba stránky - AEB Digital
              </a>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2024 Penelcom s.r.o. Všetky práva vyhradené.</p>
            </div>
          </div>
        </div>
      </footer>

      {mounted &&
        createPortal(
          <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />,
          document.body,
        )}
    </>
  );
}

function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="privacy-modal"
      className={`modal ${open ? "show" : ""}`}
      style={{ display: open ? "block" : "none" }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      aria-hidden={!open}
    >
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
        <div className="modal-header">
          <h2 id="privacy-title">Ochrana osobných údajov</h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Zatvoriť">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="company-info">
            <p>
              <strong>Penelcom s.r.o.</strong>
              <br />
              Sídlisko 1. mája 7/69 093 01 Vranov nad Topľou <br />
              IČO: 46664386, DIČ: 2023509862
              <br />
              E-mail: penelcom@penel.sk
              <br />
              Tel.: +421 949 654 829
            </p>
          </div>

          <p>
            Tieto Zásady ochrany osobných údajov (ďalej len „Zásady&quot;) popisujú, aké osobné údaje spracúvame v
            súvislosti s používaním našej webovej stránky a kontaktných formulárov.
          </p>

          <hr className="section-divider" />

          <h3>I. Kontaktný formulár</h3>
          <p>Na stránke www.penelcom.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:</p>
          <ul>
            <li>Položiť otázku k našim produktom a službám</li>
            <li>Požiadať o cenovú ponuku</li>
          </ul>

          <p>
            <strong>Rozsah spracúvaných údajov:</strong>
          </p>
          <ul>
            <li>Meno a priezvisko</li>
            <li>E-mailová adresa</li>
            <li>Telefónne číslo</li>
          </ul>

          <p>
            <strong>Účel spracovania:</strong>
            <br />
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
          </p>

          <p>
            <strong>Právny základ:</strong>
            <br />
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
          </p>

          <p>
            <strong>Doba uchovávania:</strong>
            <br />
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší
            zmluvný vzťah.
          </p>

          <hr className="section-divider" />

          <h3>II. Súbory cookies</h3>
          <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
          <ul>
            <li>
              <strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie,
              nastavení prehliadača).
            </li>
            <li>
              <strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku
              používajú (nasadzujeme ich len so súhlasom používateľa).
            </li>
          </ul>

          <p>
            <strong>Správa súhlasov:</strong>
            <br />
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení
            cookie lišty alebo priamo v prehliadači.
          </p>

          <hr className="section-divider" />

          <h3>III. Práva dotknutej osoby</h3>
          <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
          <ul>
            <li>Prístup k osobným údajom, ktoré spracúvame</li>
            <li>Oprava nepresných alebo neúplných údajov</li>
            <li>Vymazanie („právo zabudnutia&quot;), ak na spracovanie už nie je právny základ</li>
            <li>Obmedzenie spracovania</li>
            <li>Prenosnosť údajov</li>
            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
            <li>
              Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava,
              www.dataprotection.gov.sk)
            </li>
          </ul>

          <p>
            V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na penelcom@penel.sk alebo
            telefónnom čísle +421 949 654 829.
          </p>

          <hr className="section-divider" />

          <p className="effective-date">
            <strong>Tieto Zásady nadobúdajú účinnosť dňom 19. 7. 2025.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
