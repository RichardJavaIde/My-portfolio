/**
 * Proyectos del portafolio.
 *
 * Regla de oro: aquí guardamos la ESTRUCTURA (stack, enlaces, si es destacado);
 * el TEXTO (título y descripción) vive en el diccionario (es.ts / en.ts),
 * bajo `projects.items[id]`. Así agregar un proyecto es:
 *   1 línea aquí + 2 líneas en es.ts + 2 líneas en en.ts.
 *
 * 👉 El ORDEN del array es el orden visual. Un proyecto `featured` ocupa
 *    todo el ancho; conviene dejar solo uno (o un número par de normales).
 */

export type ProjectId =
  | "rentia"
  | "menufoto"
  | "divisas"
  | "cotizador"
  | "client"
  | "server"
  | "frontend";

export type Project = {
  id: ProjectId;
  stack: string[];
  links: { repo: string; live?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "menufoto",
     featured: true,
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL (Neon)",
      "Vercel Blob",
      "Docker",
      "Zod",
    ],
    links: {
      repo: "https://github.com/RichardJavaIde/Menufoto",
      live: "https://testmenu.devfitt.com/",
    },
  },
  {
    id: "rentia",
   
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "Better Auth",
      "Zod",
    ],
    links: {
      repo: "https://github.com/RichardJavaIde/SistemaArquileres",
      live: "https://sistema-arquileres.vercel.app",
    },
  },
  
  {
    id: "divisas",
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Zod",
    ],
    links: {
      repo: "https://github.com/RichardJavaIde/Divisas",
      live: "https://divisas-rt6f.vercel.app",
    },
  },
  {
    id: "cotizador",
    stack: ["React", "Vite", "JavaScript"],
    links: {
      repo: "https://github.com/RichardJavaIde/cotizador-de-criptomonedas",
    },
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
