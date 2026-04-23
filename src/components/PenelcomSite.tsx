"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { openCookieSettings } from "@/components/CookieConsent";
import RollingText from "@/components/RollingText";
import {
  aboutParagraphs,
  heroImages,
  materialHighlights,
  services,
} from "@/data/content";
import { siteMeta } from "@/data/site";

const navItems = [
  { label: "Domov", href: "#home" },
  { label: "Služby", href: "#services" },
  { label: "Kontakt", href: "#footer" },
] as const;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroParallax, setHeroParallax] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      const heroHeight = document.querySelector<HTMLElement>(".hero")?.offsetHeight ?? window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0);
      setHeroParallax(Math.min(window.scrollY * 0.15, 180));
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

  const heroStyle = { "--hero-parallax": `${heroParallax}px` } as CSSProperties & Record<"--hero-parallax", string>;

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ height: `${scrollProgress}%` }} />
      </div>

      <Navbar />

      <section id="home" className="hero" style={heroStyle}>
        <div className="hero-background" aria-hidden="true">
          {heroImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`hero-bg-image ${index === activeHero ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" data-reveal>
              Elektrina a bezpečnosť pod kontrolou
            </h1>
            <p className="hero-subtitle" data-reveal>
              Spoľahlivý partner v elektrotechnických službách od roku 2012. Špecializujeme sa na
              elektroinštalácie, fotovoltiku, meranie a regulácie, NN rozvádzače a zabezpečovacie systémy.
            </p>
            <div className="hero-actions" data-reveal>
              <a href="#gallery" className="cta-btn primary roll-btn">
                <RollingText>PROJEKTY</RollingText>
              </a>
              <a href="#services" className="cta-btn secondary roll-btn">
                <RollingText>NAŠE SLUŽBY</RollingText>
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-stats" data-reveal>
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

            <div className="hero-testimonial" data-reveal>
              <blockquote>
                &quot;Realizovali nám kvalitný projekt s maximálnou starostlivosťou. Spokojnosť s prístupom,
                kvalitou a dodržaním termínov. Odporúčame PENELCOM každému.&quot;
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image src="/assets/hero/meranie-1.jpeg" alt="Zákazník" fill sizes="50px" />
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

            <a href="#" className="more-testimonials" data-reveal>
              VIAC REFERENCIÍ
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left" data-reveal>
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

                <a href="#footer" className="about-btn roll-btn">
                  <RollingText>Kontaktovať nás</RollingText>
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="about-right" data-reveal>
              <Image
                src="/assets/services/fotovoltika/fotovoltika-1.jpeg"
                alt="Fotovoltické riešenia Penelcom"
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="about-image"
              />
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
            <div className="service-section" key={service.title} data-reveal>
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
                      <Image
                        src={service.images[0].src}
                        alt={service.images[0].alt}
                        width={900}
                        height={700}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="service-image"
                      />
                    </div>
                    <div className="image-right">
                      <Image
                        src={service.images[1].src}
                        alt={service.images[1].alt}
                        width={700}
                        height={500}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="service-image"
                      />
                      <Image
                        src={service.images[2].src}
                        alt={service.images[2].alt}
                        width={700}
                        height={500}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="service-image"
                      />
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
            <div className="materials-info" data-reveal>
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
            <div className="materials-image" data-reveal>
              <Image
                src="/assets/partner-card.png"
                alt="BAUER - Elektroinštalačný materiál"
                width={940}
                height={526}
                sizes="(max-width: 768px) 80vw, 33vw"
                className="business-card"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
