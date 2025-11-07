import { ThemeProvider } from "@/components/theme/ThemeProvider";
import i18n, { applyLanguage } from "@/i18n";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [langReady, setLangReady] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang === "en") {
        applyLanguage("en");
      }

      if (savedLang === "ar") {
        applyLanguage("ar");
      }
      if (savedLang === "he") {
        applyLanguage("he");
      }
      setLangReady(true);
    }
  }, [i18n.language]);
  if (!langReady) return null;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
