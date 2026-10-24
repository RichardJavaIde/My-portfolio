/**
 * Trayectoria de aprendizaje (línea de tiempo).
 *
 * Igual que projects.ts: aquí vive la ESTRUCTURA (id + tecnologías) y el TEXTO
 * vive en los diccionarios, bajo `journey.items[id]`.
 * 👉 El ORDEN del array es el orden visual (arriba = primero).
 *    Edítalo si tu recorrido real fue distinto.
 */

export type JourneyId =
  | "basics"
  | "tooling"
  | "api"
  | "fullstack"
  | "products"
  | "devops";

export type JourneyStep = {
  id: JourneyId;
  tech: string[];
};

export const journey: JourneyStep[] = [
  { id: "basics", tech: ["React"] },
  { id: "tooling", tech: ["React", "Vite", "Tailwind CSS"] },
  { id: "api", tech: ["Node.js", "Express", "TypeScript", "Sequelize"] },
  {
    id: "fullstack",
    tech: ["Next.js", "Drizzle ORM", "PostgreSQL (Neon)", "Better Auth", "Zod"],
  },
  {
    id: "products",
    tech: ["Next.js", "Prisma", "PostgreSQL (Neon)", "SQLite", "Vercel Blob"],
  },
  {
    id: "devops",
    tech: ["Docker", "Coolify", "GitHub Actions", "GitHub Container Registry"],
  },
];
