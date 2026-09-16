/**
 * Habilidades agrupadas por área.
 *
 * `LocalizedText` es un texto con dos idiomas. Las tecnologías son "nombres
 * propios" y no se traducen; solo la categoría es bilingüe.
 */

export type LocalizedText = { es: string; en: string };

export type SkillGroup = {
  category: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: { es: "Frontend", en: "Frontend" },
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: { es: "Backend y APIs", en: "Backend & APIs" },
    items: ["Node.js", "Express", "API Routes de Next.js", "Better Auth", "Zod"],
  },
  {
    category: { es: "Base de datos y ORM", en: "Database & ORM" },
    items: ["PostgreSQL (Neon)", "Drizzle ORM"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["pnpm (Corepack)", "Vite", "Git", "GitHub"],
  },
];