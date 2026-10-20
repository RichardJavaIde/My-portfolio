"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { useDictionary } from "@/context/lang-context";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

/**
 * Número que sube de 0 hasta `to` cuando entra a la vista.
 * - `useInView` avisa cuándo es visible (una sola vez).
 * - `animate(0, to, { onUpdate })` interpola el valor con una curva suave.
 * - Con prefers-reduced-motion mostramos el valor final sin animar.
 */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{reduce ? to : value}</span>;
}

/**
 * Franja de cifras. Los números NO están escritos a mano: se calculan desde
 * data/projects.ts y data/skills.ts, así que se actualizan solos al agregar
 * un proyecto o una tecnología.
 */
export function Stats() {
  const t = useDictionary();
  const technologies = new Set(skillGroups.flatMap((group) => group.items)).size;

  const stats = [
    { value: projects.length, label: t.stats.projects },
    { value: technologies, label: t.stats.technologies },
    { value: skillGroups.length, label: t.stats.areas },
  ];

  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <li key={stat.label}>
          <Reveal delay={index * 100} className="h-full">
            <Card className="h-full text-center">
              <p className="text-4xl font-extrabold tracking-tight text-cyan-600 dark:text-cyan-400">
                <CountUp to={stat.value} />
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </Card>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
