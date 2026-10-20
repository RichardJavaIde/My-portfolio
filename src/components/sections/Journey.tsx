"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { useDictionary } from "@/context/lang-context";
import { journey } from "@/data/journey";

/**
 * Sección "Trayectoria": línea de tiempo vertical.
 * - La línea cyan se "dibuja" mientras haces scroll: `useScroll({ target })`
 *   mide cuánto de la lista ya pasó (0 → 1) y ese valor alimenta `scaleY`.
 * - Cada punto entra con resorte y cada tarjeta se desliza desde la izquierda
 *   al entrar al viewport (`whileInView`).
 * El texto viene del diccionario (t.journey.items[id]); la estructura de
 * data/journey.ts.
 */
export function Journey() {
  const t = useDictionary();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <Section id="trayectoria" className="bg-slate-50 dark:bg-slate-900/50">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
          description={t.journey.description}
        />
      </Reveal>

      <ol
        ref={listRef}
        className="relative mx-auto mt-12 max-w-3xl space-y-8 pl-12"
      >
        {/* Riel gris (fijo) + línea cyan que crece con el scroll */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[15px] top-2 w-0.5 rounded bg-slate-200 dark:bg-slate-800"
        />
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-[15px] top-2 w-0.5 origin-top rounded bg-gradient-to-b from-cyan-500 to-cyan-400"
          style={{ scaleY: scrollYProgress }}
        />

        {journey.map((step, index) => {
          const item = t.journey.items[step.id];
          return (
            <li key={step.id} className="relative">
              <motion.span
                aria-hidden
                className="absolute -left-12 top-5 flex size-8 items-center justify-center rounded-full border-2 border-cyan-600 bg-white text-xs font-bold text-cyan-700 dark:border-cyan-400 dark:bg-slate-950 dark:text-cyan-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {index + 1}
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    {t.journey.phaseLabel} {index + 1}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {step.tech.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
