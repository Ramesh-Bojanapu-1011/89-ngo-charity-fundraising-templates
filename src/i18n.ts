import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import he from "./locales/he.json";

// Determine initial language safely (guard against SSR).
const getInitialLanguage = (): string => {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedLanguage");
      if (saved) return saved;
      // Optionally use browser language if it matches supported languages
      const nav = (navigator.language || "").slice(0, 2);
      if (["en", "ar", "he"].includes(nav)) return nav;
    }
  } catch (e) {
    // ignore (localStorage may be unavailable)
  }

  return "en";
};

const initialLng = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    he: { translation: he },
  },
  lng: initialLng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

// Helper to apply language across the app (sets i18n, document lang/dir and persists selection)
export function applyLanguage(code: string) {
  try {
    const c = code || "en";
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", c);
      document.documentElement.lang = c;
      document.documentElement.dir = c === "en" ? "ltr" : "rtl";
    }
    if (i18n.language !== c) {
      i18n.changeLanguage(c);
    }
  } catch (e) {
    // ignore errors when running in restricted environments
    if (i18n.language !== (code || "en")) {
      i18n.changeLanguage(code || "en");
    }
  }
}

export function isRtl(code: string) {
  return code !== "en";
}
