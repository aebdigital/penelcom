import { siteMeta } from "@/data/site";

export default function PrivacyPolicyContent() {
  return (
    <div className="privacy-content" data-reveal>
      <div className="company-info">
        <p>
          <strong>{siteMeta.name}</strong>
          <br />
          {siteMeta.address.street}, {siteMeta.address.postalCode} {siteMeta.address.city}
          <br />
          IČO: {siteMeta.ico}, DIČ: {siteMeta.dic}
          <br />
          E-mail: {siteMeta.legalEmail}
          <br />
          Tel.: {siteMeta.phone}
        </p>
      </div>

      <p>
        Tieto Zásady ochrany osobných údajov (ďalej len „Zásady&quot;) popisujú, aké osobné údaje spracúvame v
        súvislosti s používaním našej webovej stránky a kontaktných formulárov.
      </p>

      <hr className="section-divider" />

      <h2>I. Kontaktný formulár</h2>
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
        Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný
        vzťah.
      </p>

      <hr className="section-divider" />

      <h2>II. Súbory cookies</h2>
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

      <h2>III. Práva dotknutej osoby</h2>
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
        V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na {siteMeta.legalEmail} alebo
        telefónnom čísle {siteMeta.phone}.
      </p>

      <hr className="section-divider" />

      <p className="effective-date">
        <strong>Tieto Zásady nadobúdajú účinnosť dňom 19. 7. 2025.</strong>
      </p>
    </div>
  );
}
