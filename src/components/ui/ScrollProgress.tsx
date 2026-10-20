"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Barra fina fija arriba que muestra el progreso de lectura (scroll).
 *
 * Con Motion:
 * - `useScroll()` entrega `scrollYProgress` (0 → 1) sin listeners manuales.
 * - `useSpring` le da un "resorte" para que la barra se sienta fluida.
 * - Se anima con `scaleX` (transform, acelerado por GPU) en vez de `width`,
 *   que obliga al navegador a recalcular el layout.
 *
 * `aria-hidden`: es decorativa, un lector de pantalla no la necesita.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent"
    >
      <motion.span
        className="block h-full origin-left bg-gradient-to-r from-cyan-500 to-cyan-400"
        style={{ scaleX }}
      />
    </div>
  );
}
