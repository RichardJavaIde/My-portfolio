"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary } from "@/context/lang-context";
import { profile } from "@/data/profile";

/**
 * Hero: la primera impresión. Nombre, rol y dos botones de acción.
 * El avatar se toma de GitHub (configurado en next.config.ts como
 * remotePatterns, así next/image lo puede optimizar).
 */
export function Hero() {
  const { hero } = useDictionary();
  const avatarUrl = `https://github.com/${profile.githubUser}.png`;

  return (
    <section id="inicio" className="scroll-mt-20">
      <Container className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1fr_auto]">
        {/* Columna de texto */}
        <div className="hero-fade" style={{ animationDelay: "0ms" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            {hero.greeting}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {hero.name}
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-slate-700 dark:text-slate-300">
            {hero.role}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-slate-600 dark:text-slate-400">
            {hero.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#proyectos">{hero.primaryCta}</Button>
            <Button href={profile.github} external variant="outline">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Columna del avatar (oculta en móvil) */}
        <Image
          src={avatarUrl}
          alt={`Foto de ${hero.name}`}
          width={192}
          height={192}
          className="hero-fade hidden size-48 rounded-full border-4 border-cyan-600/20 object-cover dark:border-cyan-400/20 md:block"
          style={{ animationDelay: "150ms" }}
        />
      </Container>
    </section>
  );
}