import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import SiteEffects from "@/components/SiteEffects";
import { seoKeywords, siteMeta, siteUrl } from "@/data/site";
import "./globals.css";
import "./penelcom.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: seoKeywords,
  authors: [{ name: "Penelcom s.r.o." }],
  creator: "Penelcom s.r.o.",
  publisher: "Penelcom s.r.o.",
  alternates: {
    canonical: "/",
    languages: {
      sk: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: siteUrl,
    siteName: siteMeta.name,
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/assets/hero/elektro-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Penelcom elektrotechnické služby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/assets/hero/elektro-hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${siteUrl}/#organization`,
    name: siteMeta.name,
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    image: `${siteUrl}/assets/hero/elektro-hero.jpeg`,
    description: siteMeta.description,
    telephone: siteMeta.phone,
    email: siteMeta.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMeta.address.street,
      addressLocality: siteMeta.address.city,
      postalCode: siteMeta.address.postalCode,
      addressCountry: siteMeta.address.country,
    },
    areaServed: ["Vranov nad Topľou", "Prešovský kraj", "Slovensko"],
    foundingDate: "2012",
    sameAs: ["https://github.com/aebdigital/penelcom"],
    makesOffer: [
      "Elektroinštalácie",
      "Fotovoltické systémy",
      "Meranie a regulácie",
      "Výroba NN rozvádzačov",
      "Zabezpečovacie a kamerové systémy",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteMeta.name,
    inLanguage: "sk-SK",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className={inter.className}>
        <SiteEffects />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
