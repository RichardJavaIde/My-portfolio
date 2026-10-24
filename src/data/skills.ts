/**
 * Habilidades agrupadas por área.
 *
 * `LocalizedText` es un texto con dos idiomas. Las tecnologías son "nombres
 * propios" y no se traducen; solo la categoría es bilingüe.
 *
 * 👉 Evita repetir el mismo nombre en dos grupos: el Marquee junta todos los
 *    items y los cuenta (Stats) sin duplicados.
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
      "Motion",
    ],
  },
  {
    category: { es: "Backend y APIs", en: "Backend & APIs" },
    items: [
      "Node.js",
      "Express",
      "API Routes de Next.js",
      "Server Actions",
      "Better Auth",
      "bcryptjs",
      "jose (JWT)",
      "Zod",
    ],
  },
  {
    category: { es: "Base de datos y ORM", en: "Database & ORM" },
    items: [
      "PostgreSQL (Neon)",
      "SQLite",
      "Prisma",
      "Drizzle ORM",
      "Sequelize",
    ],
  },
  {
    category: { es: "DevOps y despliegue", en: "DevOps & deployment" },
    items: [
      "Docker",
      "Coolify",
      "GitHub Actions",
      "GitHub Container Registry",
      "Vercel",
      "Vercel Blob",
      "release-please",
    ],
  },
  {
    category: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    items: [
      "IA generativa",
      "Claude",
      "Claude Code",
      "Desarrollo asistido por IA",
      "AGENTS.md / CLAUDE.md",
    ],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["pnpm (Corepack)", "npm", "Vite", "ESLint", "Git", "GitHub"],
  },
];
