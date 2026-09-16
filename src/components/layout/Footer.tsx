"use client";

import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/context/lang-context";
import { profile } from "@/data/profile";

/** Pie de página: copyright + créditos de las tecnologías. */
export function Footer() {
  const t = useDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="text-sm text-slate-500">{t.footer.builtWith}</p>
      </Container>
    </footer>
  );
}