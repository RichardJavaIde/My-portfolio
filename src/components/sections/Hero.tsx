"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/context/lang-context";
import { profile } from "@/data/profile";

/** Curva de "frenado suave" usada en toda la entrada del hero. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Variants = estados con nombre ("hidden" / "show").
 * El contenedor define `staggerChildren`: cada hijo que use `item` entra
 * 120ms después del anterior, sin calcular delays a mano.
 */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

/**
 * Hero: la primera impresión. Nombre, rol y dos botones de acción.
 * Animación (Motion): entrada escalonada con blur, avatar que "flota" con un
 * halo pulsante y dos manchas de color que derivan lentamente de fondo.
 * El avatar se toma de GitHub (remotePatterns en next.config.ts).
 */
export function Hero() {
  const { hero } = useDictionary();
  const avatarUrl = `https://github.com/${profile.githubUser}.png`;

  return (
    <section
      id="inicio"
      className="relative isolate scroll-mt-20 overflow-hidden"
    >
      {/* Fondo decorativo: manchas de color a la deriva */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute -left-20 -top-24 size-80 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-0 size-96 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
        {/* Columna de texto: entrada escalonada */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {hero.badge}
          </motion.p>
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400"
          >
            {hero.greeting}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl"
          >
            {hero.name}
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-2 text-xl font-medium text-slate-700 dark:text-slate-300"
          >
            {hero.role}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {hero.summary}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="#proyectos">{hero.primaryCta}</Button>
            <Button href={profile.github} external variant="outline">
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        {/* Columna del avatar (oculta en móvil): entra con resorte y flota */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.35 }}
        >
          <motion.span
            aria-hidden
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-400/20 to-transparent blur-2xl"
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={avatarUrl}
              alt={`Foto de ${hero.name}`}
              width={192}
              height={192}
              priority
              className="relative size-48 rounded-full border-4 border-cyan-600/20 object-cover dark:border-cyan-400/20"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
