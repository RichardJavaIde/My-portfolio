/**
 * Diccionario en español — la "fuente de verdad" del idioma.
 *
 * OJO: NO usamos `as const`. Si lo hiciéramos, cada texto quedaría tipado
 * como su valor literal exacto (p.ej. "Ver GitHub") y la versión en inglés
 * no podría tener textos distintos. Sin `as const`, TypeScript "ensancha"
 * los valores a `string` pero CONSERVA la estructura de claves, que es lo
 * que nos importa: `en.ts` debe tener exactamente las mismas claves.
 */

export const es = {
  meta: {
    title: "Richard Duran — Desarrollador Web",
    description:
      "Portafolio de Richard, desarrollador web full-stack con Next.js, React y TypeScript.",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    greeting: "Hola, soy",
    name: "Richard Duran",
    role: "Desarrollador full-stack con Next.js",
    summary:
      "Construyo aplicaciones web modernas y completas con Next.js, React, TypeScript y el ecosistema serverless.",
    primaryCta: "Ver mis proyectos",
    secondaryCta: "Ver GitHub",
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Aprendiendo en público y construyendo en serio",
    paragraphs: [
      "Soy Richard, un desarrollador web en formación guiada por fases. Creo en aprender haciendo: cada concepto nuevo lo llevo a un proyecto real, no a un ejercicio suelto.",
      "Mi proyecto principal es Rentia, un sistema completo de gestión de alquileres: autenticación, base de datos en la nube, paneles por rol y validación tipada. Lo construí de cero y lo documento todo en un diario de aprendizaje por fases.",
    ],
    highlightsTitle: "Cosas que me definen",
    highlights: [
      "Enfoque en el ecosistema de Next.js",
      "Bases de datos con PostgreSQL y Drizzle ORM",
      "Aprendizaje por fases con proyectos reales",
      "Documentación de cada paso del camino",
    ],
  },

  skills: {
    eyebrow: "Habilidades",
    title: "Mi ecosistema tecnológico",
    description: "Tecnologías que uso y practico día a día, ordenadas por área.",
  },

  projects: {
    eyebrow: "Proyectos",
    title: "Cosas que he construido",
    description: "De mi proyecto full-stack principal a mis prácticas de base.",
    featuredBadge: "Destacado",
    repoButton: "Ver repositorio",
    liveButton: "Ver demo",
    items: {
      rentia: {
        title: "Rentia — Sistema de alquileres",
        description:
          "Plataforma full-stack de gestión de alquileres: roles admin/owner/tenant, autenticación con Better Auth, PostgreSQL en Neon con Drizzle ORM y validación tipada con Zod.",
      },
      client: {
        title: "Client — React + Vite + Tailwind",
        description:
          "Frontend de práctica construido con React, Vite y Tailwind, con enrutado y consumo de APIs.",
      },
      server: {
        title: "Server REST API — Express + TypeScript",
        description:
          "API REST educativa con Express, TypeScript y Sequelize sobre PostgreSQL.",
      },
      frontend: {
        title: "Proyecto-Frontend — React básico",
        description:
          "Mis primeros pasos con componentes, estado y renderizado en React.",
      },
    },
  },

  contact: {
    eyebrow: "Contacto",
    title: "¿Trabajemos juntos?",
    description:
      "Si te interesa mi perfil o quieres colaborar en un proyecto, escríbeme.",
    emailButton: "Escríbeme",
    githubButton: "Ver GitHub",
  },

  footer: {
    builtWith: "Hecho con Next.js, React y Tailwind CSS",
    rights: "Todos los derechos reservados.",
  },

  theme: {
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
  },
};

/** El tipo `Dictionary` nace del español, y el inglés debe cumplirlo. */
export type Dictionary = typeof es;