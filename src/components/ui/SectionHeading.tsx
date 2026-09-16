import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Etiqueta pequeña de encima del título (siempre en mayúsculas). */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/**
 * Encabezado de sección: eyebrow + título + descripción opcional.
 * Reconocible al instante y consistente en todas las secciones.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}