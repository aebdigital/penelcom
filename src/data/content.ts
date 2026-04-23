export type Service = {
  title: string;
  dataText: string;
  description: string;
  details: string[];
  images: {
    src: string;
    alt: string;
  }[];
  reverse?: boolean;
};

export const heroImages = [
  {
    src: "/assets/hero/meranie-1.jpeg",
    alt: "Meranie a regulácie",
  },
  {
    src: "/assets/hero/meranie-2.jpeg",
    alt: "Meranie a regulácie",
  },
  {
    src: "/assets/hero/elektro-hero.jpeg",
    alt: "Elektroinštalácie",
  },
] as const;

export const aboutParagraphs = [
  "Penelcom s.r.o. pôsobí na trhu od roku 2012 a etablovala sa ako spoľahlivý partner v širokom spektre elektrotechnických služieb.",
  "Spoločnosť sa zameriava na komplexné riešenia v oblasti elektroinštalácií, zabezpečujúc bezpečné a efektívne rozvody elektrickej energie pre rôzne objekty. Okrem toho sa Penelcom s.r.o. špecializuje na meranie a reguláciu, čo zahŕňa implementáciu systémov pre optimalizáciu procesov a spotreby energie.",
  "V súlade s modernými trendmi sa venujú aj inštalácii fotovoltických systémov, čím prispievajú k udržateľným energetickým riešeniam. Firma má tiež expertízu vo výrobe nízkonapäťových (NN) rozvádzačov na mieru, ktoré sú kľúčové pre riadenie a ochranu elektrických obvodov.",
  "Ponuku dopĺňajú moderné elektronické zabezpečovacie a kamerové systémy, ktoré poskytujú ochranu majetku a osôb s využitím najnovších technológií. Penelcom s.r.o. je tak silným hráčom na trhu, ktorý vďaka dlhoročným skúsenostiam a širokému portfóliu služieb dokáže pokryť komplexné požiadavky svojich klientov v oblasti elektroinštalácií a súvisiacich technológií.",
] as const;

export const services: Service[] = [
  {
    title: "Elektroinštalácie",
    dataText: "Elektroinštalácie",
    description:
      "Zabezpečujeme kompletné elektroinštalácie pre obytné, komerčné aj priemyselné objekty. Od prvotného návrhu, cez montáž až po revízie, kladieme dôraz na bezpečnosť, spoľahlivosť a energetickú efektivitu. Používame len certifikované materiály a postupy v súlade s platnými normami, aby sme vám garantovali bezproblémovú a dlhodobú funkčnosť.",
    details: [
      "Projektovanie elektrických rozvodov",
      "Inštalácia a údržba elektrických systémov",
      "Revízie a merania elektrických zariadení",
      "Riešenie porúch a modernizácie",
    ],
    images: [
      {
        src: "/assets/services/elektroinstalacie/elektro-1.jpeg",
        alt: "Elektroinštalácie",
      },
      {
        src: "/assets/services/elektroinstalacie/elektro-2.jpeg",
        alt: "Elektroinštalácie",
      },
      {
        src: "/assets/services/elektroinstalacie/elektro-3.jpeg",
        alt: "Elektroinštalácie",
      },
    ],
  },
  {
    title: "Meranie a regulácie",
    dataText: "Meranie a regulácie",
    description:
      "Ponúkame inštaláciu a konfiguráciu systémov pre meranie a reguláciu, ktoré vám umožnia efektívne riadiť rôzne procesy a optimalizovať spotrebu energie. Či už ide o automatizáciu výrobných liniek, riadenie kúrenia a ventilácie v budovách, alebo monitorovanie technologických procesov, naše riešenia vám pomôžu dosiahnuť vyššiu efektivitu a znížiť prevádzkové náklady.",
    details: [
      "Systémy merania spotreby energie",
      "Regulačné systémy pre optimalizáciu",
      "Automatizácia technologických procesov",
      "Monitoring a diagnostika systémov",
    ],
    images: [
      {
        src: "/assets/services/meranie/meranie-1.jpeg",
        alt: "Meranie a regulácie",
      },
      {
        src: "/assets/services/meranie/meranie-2.jpeg",
        alt: "Meranie a regulácie",
      },
      {
        src: "/assets/services/meranie/meranie-3.jpeg",
        alt: "Meranie a regulácie",
      },
    ],
    reverse: true,
  },
  {
    title: "Fotovoltické systémy",
    dataText: "Fotovoltické systémy",
    description:
      "Využite silu slnka s našimi fotovoltickými systémami. Navrhujeme a inštalujeme solárne panely na mieru pre rodinné domy, firmy a iné objekty, ktoré vám umožnia produkovať vlastnú čistú elektrickú energiu. Zabezpečujeme kompletné riešenia – od posúdenia lokality a projektovania, cez montáž a pripojenie do siete, až po nastavenie monitorovacích systémov. Prispejte k udržateľnosti a znížte svoje účty za elektrinu.",
    details: [
      "Projektovanie fotovoltických systémov",
      "Inštalácia solárnych panelov",
      "Pripojenie k distribučnej sieti",
      "Údržba a monitoring výkonu",
    ],
    images: [
      {
        src: "/assets/services/fotovoltika/fotovoltika-1.jpeg",
        alt: "Fotovoltika",
      },
      {
        src: "/assets/services/fotovoltika/fotovoltika-2.jpeg",
        alt: "Fotovoltika",
      },
      {
        src: "/assets/services/fotovoltika/fotovoltika-3.jpeg",
        alt: "Fotovoltika",
      },
    ],
  },
  {
    title: "Výroba NN rozvádzačov",
    dataText: "Výroba NN rozvádzačov",
    description:
      "Sme expertmi na výrobu nízkonapäťových (NN) rozvádzačov na mieru. Každý rozvádzač je navrhnutý a zostavený precízne podľa špecifických požiadaviek projektu a v súlade s najvyššími technickými normami. Ponúkame rozvádzače pre široké spektrum aplikácií – od bytových a domových, cez komerčné, až po komplexné priemyselné rozvádzače. Kvalita a bezpečnosť sú pre nás prvoradé.",
    details: [
      "Projektovanie rozvádzačov na mieru",
      "Výroba podľa noriem IEC",
      "Inštalácia a uvedenie do prevádzky",
      "Technická podpora a údržba",
    ],
    images: [
      {
        src: "/assets/services/rozvadzace/rozvadzace-1.jpeg",
        alt: "NN rozvádzače",
      },
      {
        src: "/assets/services/rozvadzace/rozvadzace-2.jpeg",
        alt: "NN rozvádzače",
      },
      {
        src: "/assets/services/rozvadzace/rozvadzace-3.jpeg",
        alt: "NN rozvádzače",
      },
    ],
    reverse: true,
  },
  {
    title: "Zabezpečovacie a kamerové systémy",
    dataText: "Zabezpečovacie a",
    description:
      "Chráňte svoj majetok a blízkych s našimi elektronickými zabezpečovacími systémami (EZS) a kamerovými systémami (CCTV). Ponúkame moderné a spoľahlivé riešenia pre komplexnú ochranu rodinných domov, firemných priestorov či priemyselných areálov. Nainštalujeme alarmy, detektory pohybu, požiaru a rozbitia skla, ako aj vysokokvalitné IP kamery s možnosťou vzdialeného monitoringu a záznamu, ktoré vám poskytnú pokoj a pocit bezpečia.",
    details: [
      "Projektovanie bezpečnostných systémov",
      "Inštalácia kamerových systémov",
      "Elektronické zabezpečovacie systémy",
      "Monitoring a údržba systémov",
    ],
    images: [
      {
        src: "/assets/services/kamery/kamery-1.jpeg",
        alt: "Zabezpečovacie systémy",
      },
      {
        src: "/assets/services/kamery/kamery-2.png",
        alt: "Kamerové systémy",
      },
      {
        src: "/assets/services/kamery/kamery-3.png",
        alt: "Zabezpečovacie systémy",
      },
    ],
  },
];

export const materialHighlights = [
  "Široký sortiment elektroinštalačného materiálu",
  "Certifikované produkty od renomovaných výrobcov",
  "Profesionálne poradenstvo a technická podpora",
  "Rýchla dodávka a bezkonkurenčné ceny",
] as const;
