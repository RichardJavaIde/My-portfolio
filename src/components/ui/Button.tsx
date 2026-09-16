import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** true → abre en pestaña nueva con la seguridad aplicada. */
  external?: boolean;
  ariaLabel?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 " +
  "dark:focus-visible:outline-cyan-400";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-cyan-600 text-white hover:bg-cyan-700",
  outline:
    "border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-700 " +
    "dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300",
  ghost: "text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300",
};

const SIZES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-xs",
};

/**
 * Todos los botones del sitio son enlaces (<a>), no <button>.
 * `external` agrega target="_blank" + rel para no vulnerar seguridad.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}