"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Configuración global de Motion.
 * `reducedMotion="user"` → si el sistema del visitante pide menos movimiento
 * (prefers-reduced-motion), Motion desactiva las animaciones de transformación
 * (x, y, scale…) automáticamente en TODOS los componentes. Cero código extra.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
