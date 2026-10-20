/**
 * Contexto global de idioma.
 *
 * ¿Por qué es Client ("use client")? Porque el idioma es ESTADO del lado del
 * navegador: el usuario hace clic en un botón y toda la página cambia sin
 * recargar. Todo componente que llame a `useDictionary()` o `useLang()` debe
 * ser Client Component.
 *
 * ¿Por qué useSyncExternalStore?
 * La preferencia vive en localStorage, que es un sistema EXTERNO a React.
 * useSyncExternalStore es la herramienta oficial para leerlo:
 * - En el servidor (y durante la hidratación) usa `getServerSnapshot` → "es",
 *   así el HTML coincide y no hay error de hidratación.
 * - Ya en el cliente pasa al valor guardado por el usuario.
 * Antes se hacía con useEffect + setState, que React Compiler/ESLint
 * (`react-hooks/set-state-in-effect`) desaconseja por renders en cascada.
 *
 * El único useEffect que queda sincroniza <html lang="..."> (accesibilidad y
 * SEO): eso SÍ es actualizar un sistema externo (el DOM), su uso correcto.
 */

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
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

// ---------- Mini "store" de idioma (fuera de React) ----------

/** Copia en memoria: sigue funcionando si localStorage no está disponible. */
let current: Lang | null = null;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function getSnapshot(): Lang {
  if (current === null) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      current = saved === "es" || saved === "en" ? saved : DEFAULT_LANG;
    } catch {
      // localStorage puede no estar disponible (modo privado). No es crítico.
      current = DEFAULT_LANG;
    }
  }
  return current;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Si el idioma cambia en OTRA pestaña, nos enteramos por el evento `storage`.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      current = null; // forzar relectura
      listener();
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    current = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Igual que arriba: no crítico.
    }
    notify();
  }, []);

  const toggleLang = useCallback(() => {
    setLang(getSnapshot() === "es" ? "en" : "es");
  }, [setLang]);

  // Reflejar el idioma en <html lang="..."> (sistema externo: el DOM).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: lang === "es" ? es : en,
    }),
    [lang, setLang, toggleLang],
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
