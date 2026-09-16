import { skillGroups } from "@/data/skills";

/**
 * Cinta (marquee) infinita con tus tecnologías, justo bajo el hero.
 *
 * El truco del loop que no se corta:
 * - La pista lista los items DUPLICADOS ([...items, ...items]).
 * - La animación mueve la pista hasta translateX(-50%), que es exactamente
 *   el ancho de UNA copia → al llegar, la posición coincide con el inicio
 *   y el bucle parece continuo.
 * - `width: max-content` hace que la pista no se parta en varias líneas.
 * - El `mask-image` desvanece los bordes para que los chips "entren/salgan"
 *   suavemente.
 * - Solo CSS: se pausa con :hover y respeta prefers-reduced-motion.
 */
export function Marquee() {
  const items = skillGroups.flatMap((group) => group.items);
  const doubled = [...items, ...items];

  return (
    <div aria-hidden className="marquee border-y border-slate-200/60 py-4">
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="marquee-item"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}