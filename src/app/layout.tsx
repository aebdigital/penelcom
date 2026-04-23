import type { Metadata } from "next";
import "./globals.css";
import "./penelcom.css";

export const metadata: Metadata = {
  title:
    "Penelcom s.r.o. - Elektrotechnické služby | Elektroinštalácie | Fotovoltika | NN rozvádzače",
  description:
    "Penelcom s.r.o. - spoľahlivý partner v elektrotechnických službách od roku 2012. Poskytujeme elektroinštalácie, fotovoltické systémy, meranie a regulácie, výrobu NN rozvádzačov a zabezpečovacie systémy. Vranov nad Topľou, Slovensko.",
  keywords: [
    "elektroinštalácie",
    "fotovoltika",
    "solárne panely",
    "NN rozvádzače",
    "nízkonapäťové rozvádzače",
    "zabezpečovacie systémy",
    "kamerové systémy",
    "meranie regulácie",
    "automatizácia",
    "elektrotechnika",
    "Vranov nad Topľou",
    "Slovensko",
    "elektrikár",
    "elektrotechnické služby",
    "revízie elektrických zariadení",
    "priemyselné rozvádzače",
  ],
  authors: [{ name: "Penelcom s.r.o." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
