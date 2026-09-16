"use client";

import { useLang } from "@/context/lang-context";
import { cn } from "@/lib/cn";

type LangToggleProps = { className?: string };

/**
 * Botón circular ES/EN que alterna el idioma.
 * Muestra el idioma AL QUE se va a cambiar: en español muestra "EN".
 */
export function LangToggle({ className }: LangToggleProps) {
  const { lang, toggleLang } = useLang();
  const target = lang === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
      className={cn(
        "rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase",
        "text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700",
        "dark:border-slate-600 dark:text-slate-300",
        "dark:hover:border-cyan-400 dark:hover:text-cyan-300",
        className,
      )}
    >
      {target}
    </button>
  );
}