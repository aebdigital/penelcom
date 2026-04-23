"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import RollingText from "@/components/RollingText";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const storageKey = "penelcom-cookie-preferences";
const openSettingsEvent = "penelcom:open-cookie-settings";

export function openCookieSettings() {
  window.dispatchEvent(new Event(openSettingsEvent));
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem(storageKey);

    if (saved) {
      try {
        setPreferences({ ...defaultPreferences, ...JSON.parse(saved), necessary: true });
      } catch {
        setPreferences(defaultPreferences);
      }
    } else {
      setBannerOpen(true);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setSettingsOpen(true);
      setBannerOpen(false);
    };

    window.addEventListener(openSettingsEvent, openSettings);
    return () => window.removeEventListener(openSettingsEvent, openSettings);
  }, []);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    window.localStorage.setItem(storageKey, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setBannerOpen(false);
    setSettingsOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      {bannerOpen && (
        <section className="cookie-banner" aria-label="Cookies" data-reveal>
          <div>
            <h2>Cookies</h2>
            <p>
              Používame nevyhnutné cookies pre fungovanie stránky a voliteľné cookies pre analytiku a zlepšovanie
              obsahu.
            </p>
            <button type="button" className="cookie-settings-link" onClick={() => setSettingsOpen(true)}>
              Nastavenia
            </button>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-btn secondary roll-btn" onClick={() => savePreferences(defaultPreferences)}>
              <RollingText>Odmietnuť</RollingText>
            </button>
            <button
              type="button"
              className="cookie-btn primary roll-btn"
              onClick={() => savePreferences({ necessary: true, analytics: true, marketing: true })}
            >
              <RollingText>Prijať všetko</RollingText>
            </button>
          </div>
        </section>
      )}

      {settingsOpen && (
        <div className="cookie-modal" role="presentation" onClick={() => setSettingsOpen(false)}>
          <div
            className="cookie-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cookie-modal-header">
              <div>
                <span>Cookies</span>
                <h2 id="cookie-settings-title">Nastavenia cookies</h2>
              </div>
              <button type="button" className="cookie-close" aria-label="Zatvoriť" onClick={() => setSettingsOpen(false)}>
                &times;
              </button>
            </div>

            <CookieToggle
              title="Nevyhnutné cookies"
              description="Zabezpečujú základné fungovanie webu a nie je možné ich vypnúť."
              checked
              disabled
              onChange={() => undefined}
            />
            <CookieToggle
              title="Analytické cookies"
              description="Pomáhajú nám pochopiť návštevnosť a zlepšovať obsah webu."
              checked={preferences.analytics}
              onChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))}
            />
            <CookieToggle
              title="Marketingové cookies"
              description="Umožňujú relevantnejšie kampane a meranie výkonu reklamy."
              checked={preferences.marketing}
              onChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))}
            />

            <div className="cookie-modal-actions">
              <button type="button" className="cookie-btn secondary roll-btn" onClick={() => savePreferences(defaultPreferences)}>
                <RollingText>Odmietnuť</RollingText>
              </button>
              <button type="button" className="cookie-btn primary roll-btn" onClick={() => savePreferences(preferences)}>
                <RollingText>Uložiť nastavenia</RollingText>
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}

function CookieToggle({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className={`cookie-toggle ${disabled ? "is-disabled" : ""}`}>
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <i aria-hidden="true" />
    </label>
  );
}
