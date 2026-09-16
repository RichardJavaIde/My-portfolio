import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** true → ligera elevación al pasar el mouse (tarjetas de proyectos). */
  hover?: boolean;
};

/** Caja base: borde suave, esquinas redondeadas y sombra sutil. */
export function Card({ children, className, hover }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
        hover && "transition hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {children}
    </article>
  );
}