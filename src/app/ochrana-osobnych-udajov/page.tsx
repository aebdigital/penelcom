import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import RollingText from "@/components/RollingText";
import { siteMeta, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti Penelcom s.r.o.",
  alternates: {
    canonical: "/ochrana-osobnych-udajov",
  },
  openGraph: {
    title: "Ochrana osobných údajov | Penelcom s.r.o.",
    description: "Zásady ochrany osobných údajov spoločnosti Penelcom s.r.o.",
    url: `${siteUrl}/ochrana-osobnych-udajov`,
    images: [
      {
        url: "/assets/hero/elektro-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Penelcom elektrotechnické služby",
      },
    ],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="privacy-page">
        <header className="privacy-hero">
          <div className="privacy-hero-bg" aria-hidden="true">
            <Image
              src="/assets/hero/elektro-hero.jpeg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="privacy-hero-image"
            />
          </div>
          <div className="privacy-hero-content" data-reveal>
            <span>Penelcom s.r.o.</span>
            <h1>Ochrana osobných údajov</h1>
            <p>
              Prehľad spracúvania osobných údajov, používanja cookies a práv dotknutých osôb pre návštevníkov
              stránky {siteMeta.name}.
            </p>
          </div>
        </header>

        <section className="privacy-section">
          <div className="container">
            <PrivacyPolicyContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
