"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Retardo en ms: el "cerebro" del stagger (cada tarjeta entra una tras otra). */
  delay?: number;
  className?: string;
};

/**
 * Envuelve contenido que "aparece" al entrar a la vista (fade + subida).
 *
 * ¿Cómo funciona? IntersectionObserver es una API NATIVA del navegador:
 * observa cuándo el elemento cruza el viewport y ejecuta una función.
 * - threshold 0.15 → se activa cuando el 15% del bloque es visible.
 * - Tras activarse, hacemos unobserve(): el efecto corre SOLO UNA VEZ
 *   (el contenido no se vuelve a esconder si el usuario sube y baja).
 *
 * El fade en sí es clases de CSS (`.reveal` / `.is-visible`), que viven
 * en globals.css. Este componente solo decide CUÁNDO añadir la clase.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}