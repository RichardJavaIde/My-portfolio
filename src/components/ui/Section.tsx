import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionSpacing = "default" | "tight" | "wide";

type SectionProps = {
  /** id de ancla, p.ej. "sobre-mi" → #sobre-mi */
  id: string;
  children: ReactNode;
  /** Clases extra, típicamente para fondos alternos como "bg-slate-50" */
  className?: string;
  spacing?: SectionSpacing;
};

/** Ritmo vertical de la página, definido una sola vez. */
const SPACING: Record<SectionSpacing, string> = {
  default: "py-16 sm:py-24",
  tight: "py-12 sm:py-16",
  wide: "py-20 sm:py-32",
};

/**
 * Una sección completa: ancla + ritmo vertical + contenedor centrado.
 * `scroll-mt-20` compensa la navbar sticky para que el ancla no quede tapada.
 */
export function Section({
  id,
  children,
  className,
  spacing = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20", SPACING[spacing], className)}>
      <Container>{children}</Container>
    </section>
  );
}