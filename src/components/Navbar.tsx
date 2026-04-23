"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Domov", href: "/#home" },
  { label: "Služby", href: "/#services" },
  { label: "Kontakt", href: "/#footer" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const heroHeight = document.querySelector<HTMLElement>(".hero, .privacy-hero")?.offsetHeight ?? window.innerHeight;
      const triggerPoint = heroHeight * 0.3;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showSolidNav = isScrolled || menuOpen;

  return (
    <nav className={`navbar ${showSolidNav ? "scrolled" : ""}`} aria-label="Hlavná navigácia">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link" onClick={closeMenu} aria-label="Penelcom domov">
            <Image src="/assets/logo.png" alt="Penelcom" width={916} height={126} className="logo-img" priority />
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="nav-link" onClick={closeMenu}>
                {item.label}
              </Link>
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
  );
}
