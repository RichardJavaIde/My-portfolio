/**
 * Contexto global de idioma.
 *
 * ¿Por qué es Client ("use client")? Porque el idioma es ESTADO de React del
 * lado del navegador: el usuario hace clic en un botón y toda la página cambia
 * sin recargar. Todo componente que llame a `useDictionary()` o `useLang()`
 * debe ser Client Component.
 *
 * ¿Por qué dos useEffect?
 * 1. El estado inicial es "es" tanto en servidor como en el primer render del
 *    cliente → no hay error de hidratación. Después de montar, leemos lo que
 *    el usuario guardó en localStorage.
 * 2. Al cambiar de idioma: lo reflejamos en <html lang="..."> (accesibilidad y
 *    SEO) y lo guardamos para que persista al recargar.
 */

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { es, type Dictionary } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";

export type Lang = "es" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** El diccionario activo: atajo `t` para las secciones. */
  t: Dictionary;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG: Lang = "es";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  // Efecto 1: cargar la preferencia guardada (solo después de montar).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {
      // localStorage puede no estar disponible (modo privado). No es crítico.
    }
  }, []);

  // Efecto 2: reflejar el idioma en <html> y persistirlo.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Igual que arriba: no crítico.
    }
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "es" ? "en" : "es")),
      t: lang === "es" ? es : en,
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LangProvider>");
  return ctx;
}

export function useDictionary(): Dictionary {
  return useLang().t;
}