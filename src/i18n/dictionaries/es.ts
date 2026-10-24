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
      "Portafolio de Richard, desarrollador web full-stack con Next.js, React y TypeScript. Bases de datos con Prisma, despliegue con Docker y Coolify.",
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    badge: "Disponible para nuevas oportunidades",
    greeting: "Hola, soy",
    name: "Richard Duran",
    role: "Desarrollador full-stack con Next.js",
    summary:
      "Construyo aplicaciones web modernas y completas con Next.js, React y TypeScript, y las llevo a producción con Docker y Coolify.",
    primaryCta: "Ver mis proyectos",
    secondaryCta: "Ver GitHub",
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Aprendiendo en público y construyendo en serio",
    paragraphs: [
      "Soy Richard, un desarrollador web en formación guiada por fases. Creo en aprender haciendo: cada concepto nuevo lo llevo a un proyecto real, no a un ejercicio suelto.",
      "Mis proyectos más completos son Rentia (gestión de alquileres), Menufoto (menú digital para restaurantes) y Divisas (tasas de cambio para pantallas de TV): sistemas con autenticación, roles, base de datos y despliegue real. Los empaqueto con Docker, los publico con Coolify y automatizo las versiones con GitHub Actions.",
      "También incorporo la inteligencia artificial a mi flujo de trabajo, con herramientas como Claude Code, y documento cada paso del camino en un diario de aprendizaje por fases.",
    ],
    highlightsTitle: "Cosas que me definen",
    highlights: [
      "Enfoque en el ecosistema de Next.js",
      "Bases de datos con PostgreSQL, Prisma y Drizzle ORM",
      "Despliegue con Docker, Coolify y GitHub Actions",
      "Desarrollo asistido por inteligencia artificial",
      "Aprendizaje por fases con proyectos reales",
      "Documentación de cada paso del camino",
    ],
  },

  stats: {
    projects: "Proyectos",
    technologies: "Tecnologías",
    areas: "Áreas de especialidad",
  },

  skills: {
    eyebrow: "Habilidades",
    title: "Mi ecosistema tecnológico",
    description: "Tecnologías que uso y practico día a día, ordenadas por área.",
  },

  journey: {
    eyebrow: "Trayectoria",
    title: "Cómo he ido creciendo",
    description:
      "Mi ruta de aprendizaje, fase por fase: de los fundamentos de React a proyectos full-stack desplegados con Docker y Coolify.",
    phaseLabel: "Fase",
    items: {
      basics: {
        title: "Fundamentos de React",
        description:
          "Componentes, estado y renderizado: mis primeros pasos construyendo interfaces.",
      },
      tooling: {
        title: "Frontend moderno",
        description:
          "React con Vite y Tailwind CSS, con enrutado y consumo de APIs.",
      },
      api: {
        title: "Backend y APIs REST",
        description:
          "Express con TypeScript y Sequelize sobre PostgreSQL.",
      },
      fullstack: {
        title: "Full-stack con Next.js",
        description:
          "Rentia: autenticación, base de datos en la nube, roles y validación tipada.",
      },
      products: {
        title: "Productos reales con Prisma",
        description:
          "Menufoto y Divisas: Prisma, roles, sesiones seguras, fotos optimizadas y publicación en Vercel.",
      },
      devops: {
        title: "Despliegue y DevOps",
        description:
          "Imágenes Docker, despliegue autoalojado con Coolify y CI/CD con GitHub Actions y versionado automático.",
      },
    },
  },

  projects: {
    eyebrow: "Proyectos",
    title: "Cosas que he construido",
    description: "De mis proyectos full-stack a mis prácticas de base.",
    featuredBadge: "Destacado",
    repoButton: "Ver repositorio",
    liveButton: "Ver demo",
    items: {
      rentia: {
        title: "Rentia — Sistema de alquileres",
        description:
          "Plataforma full-stack de gestión de alquileres: roles admin/owner/tenant, autenticación con Better Auth, PostgreSQL en Neon con Drizzle ORM y validación tipada con Zod.",
      },
      menufoto: {
        title: "Menufoto — Menú digital visual",
        description:
          "Menú digital para restaurantes: carta pública con 5 temas, panel de administración con roles ADMIN y USER, fotos optimizadas a WebP, código QR y login con límite de intentos. Next.js, Prisma, Neon, Vercel Blob y Docker.",
      },
      divisas: {
        title: "Divisas — Sistema de tasas para casa de cambio",
        description:
          "Panel protegido para administrar monedas y tasas con historial de cambios, y una pantalla pública pensada para TV vertical (1080×1920) que se actualiza sola y sigue funcionando sin conexión.",
      },
      cotizador: {
        title: "Cotizador de criptomonedas — React + Vite",
        description: "Cotizador de criptomonedas construido con React y Vite.",
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