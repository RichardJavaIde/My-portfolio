/**
 * Proyectos del portafolio.
 *
 * Regla de oro: aquí guardamos la ESTRUCTURA (stack, enlaces, si es destacado);
 * el TEXTO (título y descripción) vive en el diccionario (es.ts / en.ts),
 * bajo `projects.items[id]`. Así agregar un proyecto es:
 *   1 línea aquí + 2 líneas en es.ts + 2 líneas en en.ts.
 */

export type ProjectId = "rentia" | "client" | "server" | "frontend";

export type Project = {
  id: ProjectId;
  stack: string[];
  links: { repo: string; live?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "rentia",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Better Auth",
      "Zod",
    ],
    links: { repo: "https://github.com/RichardJavaIde/SistemaArquileres" },
  },
  {
    id: "client",
    stack: ["React", "Vite", "Tailwind CSS"],
    links: { repo: "https://github.com/RichardJavaIde" },
  },
  {
    id: "server",
    stack: ["Node.js", "Express", "TypeScript", "Sequelize"],
    links: { repo: "https://github.com/RichardJavaIde" },
  },
  {
    id: "frontend",
    stack: ["React"],
    links: { repo: "https://github.com/RichardJavaIde" },
  },
];