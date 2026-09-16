"use client";

import { Container } from "@/components/ui/Container";
import { LangToggle } from "@/components/layout/LangToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useDictionary } from "@/context/lang-context";

/**
 * Barra de navegación SEGUIDORA (sticky): al hacer scroll se queda arriba.
 * Fondo translúcido + blur para que el contenido se vea detrás.
 */
export function Navbar() {
  const t = useDictionary();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/90">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Richard
          <span className="text-cyan-600 dark:text-cyan-400">.</span>
        </a>

        {/* Navegación en desktop (oculta en móvil por simplicidad) */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 text-sm font-medium md:flex"
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-600 transition hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
      </Container>
    </header>
  );
}