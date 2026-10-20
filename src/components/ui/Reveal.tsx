"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  /** Retardo en ms: el "cerebro" del stagger (cada tarjeta entra una tras otra). */
  delay?: number;
  className?: string;
};

/**
 * Envuelve contenido que "aparece" al entrar a la vista (fade + subida).
 *
 * Ahora lo anima Motion (antes: IntersectionObserver + clases CSS).
 * La API es idéntica, así que ninguna sección tuvo que cambiar.
 * - `whileInView` → anima cuando el elemento entra al viewport.
 * - `viewport.once` → corre UNA sola vez (no se re-esconde al subir/bajar).
 * - `amount: 0.15` → se activa cuando el 15% del bloque es visible.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
