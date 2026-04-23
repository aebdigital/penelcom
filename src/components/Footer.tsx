"use client";

import Link from "next/link";
import RollingText from "@/components/RollingText";
import { openCookieSettings } from "@/components/CookieConsent";
import { siteMeta } from "@/data/site";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-cta-content">
            <h2>Potrebujete elektrotechnické služby?</h2>
            <p>Kontaktujte nás a my Vám radi poradíme</p>
          </div>
          <div className="footer-cta-button">
            <a href={siteMeta.phoneHref} className="footer-btn roll-btn">
              <RollingText>Zavolať</RollingText>
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
              <strong>Email:</strong> <a href={`mailto:${siteMeta.legalEmail}`}>{siteMeta.email}</a>
            </p>
            <p>
              <strong>Telefonický kontakt:</strong> <a href={siteMeta.phoneHref}>{siteMeta.phone}</a>
            </p>
          </div>

          <div className="footer-section footer-navigation">
            <div className="footer-nav-column">
              <h4>Navigácia</h4>
              <ul>
                <li>
                  <Link href="/#home">Domov</Link>
                </li>
                <li>
                  <Link href="/#services">Služby</Link>
                </li>
                <li>
                  <Link href="/#footer">Kontakt</Link>
                </li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4>Služby</h4>
              <ul>
                {["Elektroinštalácie", "Meranie a regulácie", "Fotovoltika", "NN rozvádzače", "Zabezpečovacie systémy"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="/#services">{item}</Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href="/ochrana-osobnych-udajov" id="privacy-policy-link">
                    Ochrana osobných údajov
                  </Link>
                </li>
                <li>
                  <button type="button" className="footer-cookie-link" onClick={openCookieSettings}>
                    Cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-credit">
            <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="credit-link">
              Tvorba stránky - AEB Digital
            </a>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2026 Penelcom s.r.o. Všetky práva vyhradené.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
