"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useDictionary } from "@/context/lang-context";
import { profile } from "@/data/profile";

/** Sección "Sobre mí": párrafos de presentación + tarjeta de highlights. */
export function About() {
  const t = useDictionary();

  return (
    <Section id="sobre-mi" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Párrafos de presentación */}
        <div className="space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tarjeta con "cosas que me definen" */}
        <Card className="flex flex-col gap-3">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {t.about.highlightsTitle}
          </h3>
          <ul className="space-y-2">
            {t.about.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <span
                  aria-hidden
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400"
                />
                {highlight}
              </li>
            ))}
          </ul>
          <Button
            href={profile.github}
            external
            variant="outline"
            size="sm"
            className="mt-auto self-start"
          >
            GitHub
          </Button>
        </Card>
      </div>
    </Section>
  );
}