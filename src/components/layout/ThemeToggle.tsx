"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useDictionary } from "@/context/lang-context";
import { cn } from "@/lib/cn";

type ThemeToggleProps = { className?: string };

/**
 * Botón circular sol/luna que alterna el tema.
 * - Muestra el icono del DESTINO: en claro se ve la luna (clic → oscuro),
 *   en oscuro se ve el sol (clic → claro).
 * - `mounted` evita el mismatch de hidratación: antes de montar, el servidor
 *   y el cliente podrían "pensar" distinto sobre el tema (el script de
 *   next-themes ya puso la clase en <html>); renderizamos vacío hasta que
 *   existe el navegador.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useDictionary();

  // Solo montamos el icono tras el primer render: hidratación segura.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? t.theme.toLight : t.theme.toDark;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(
        "rounded-full border border-slate-300 p-2 text-slate-700 transition",
        "hover:border-cyan-600 hover:text-cyan-700",
        "dark:border-slate-600 dark:text-slate-300",
        "dark:hover:border-cyan-400 dark:hover:text-cyan-300",
        className,
      )}
    >
      {mounted &&
        (isDark ? (
          // Sol (Heroicons outline): en oscuro mostramos el sol = ir a claro.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          // Luna (Heroicons solid): en claro mostramos la luna = ir a oscuro.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clipRule="evenodd"
            />
          </svg>
        ))}
    </button>
  );
}