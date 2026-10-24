/**
 * Diccionario en inglés.
 *
 * Se declara con el tipo `Dictionary` (definido en es.ts), así TypeScript
 * marca en rojo cualquier clave que falte o sobre con respecto al español.
 * Si Richard olvida traducir "proyectos", el compilador avisa. 🛡️
 */

import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Richard Duran — Web Developer",
    description:
      "Richard's portfolio: a full-stack web developer focused on Next.js, React and TypeScript. Databases with Prisma, deployment with Docker and Coolify.",
  },

  nav: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#sobre-mi" },
    { label: "Skills", href: "#habilidades" },
    { label: "Journey", href: "#trayectoria" },
    { label: "Projects", href: "#proyectos" },
    { label: "Contact", href: "#contacto" },
  ],

  hero: {
    badge: "Open to new opportunities",
    greeting: "Hi, I'm",
    name: "Richard Duran",
    role: "Full-stack developer with Next.js",
    summary:
      "I build modern, complete web applications with Next.js, React and TypeScript, and take them to production with Docker and Coolify.",
    primaryCta: "See my projects",
    secondaryCta: "View GitHub",
  },

  about: {
    eyebrow: "About me",
    title: "Learning in public and building for real",
    paragraphs: [
      "I'm Richard, a web developer learning through guided phases. I believe in learning by doing: every new concept goes into a real project, not a throwaway exercise.",
      "My most complete projects are Rentia (rental management), Menufoto (a digital menu for restaurants) and Divisas (exchange rates for TV screens): systems with authentication, roles, a database and real deployment. I package them with Docker, publish them with Coolify and automate versions with GitHub Actions.",
      "I also bring artificial intelligence into my workflow, with tools like Claude Code, and document every step of the way in a phase-by-phase learning journal.",
    ],
    highlightsTitle: "What defines me",
    highlights: [
      "Focus on the Next.js ecosystem",
      "Databases with PostgreSQL, Prisma and Drizzle ORM",
      "Deployment with Docker, Coolify and GitHub Actions",
      "AI-assisted development",
      "Phase-based learning with real projects",
      "Documenting every step of the way",
    ],
  },

  stats: {
    projects: "Projects",
    technologies: "Technologies",
    areas: "Focus areas",
  },

  skills: {
    eyebrow: "Skills",
    title: "My technology ecosystem",
    description: "Technologies I use and practice every day, grouped by area.",
  },

  journey: {
    eyebrow: "Journey",
    title: "How I've been growing",
    description:
      "My learning path, phase by phase: from React fundamentals to full-stack projects deployed with Docker and Coolify.",
    phaseLabel: "Phase",
    items: {
      basics: {
        title: "React fundamentals",
        description:
          "Components, state and rendering: my first steps building interfaces.",
      },
      tooling: {
        title: "Modern frontend",
        description:
          "React with Vite and Tailwind CSS, with routing and API consumption.",
      },
      api: {
        title: "Backend & REST APIs",
        description:
          "Express with TypeScript and Sequelize on PostgreSQL.",
      },
      fullstack: {
        title: "Full-stack with Next.js",
        description:
          "Rentia: authentication, cloud database, roles and typed validation.",
      },
      products: {
        title: "Real products with Prisma",
        description:
          "Menufoto and Divisas: Prisma, roles, secure sessions, optimized photos and publishing on Vercel.",
      },
      devops: {
        title: "Deployment & DevOps",
        description:
          "Docker images, self-hosted deployment with Coolify, and CI/CD with GitHub Actions and automatic versioning.",
      },
    },
  },

  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    description: "From my full-stack projects to my foundational practice.",
    featuredBadge: "Featured",
    repoButton: "View repo",
    liveButton: "Live demo",
    items: {
      rentia: {
        title: "Rentia — Rental management system",
        description:
          "Full-stack rental management platform: admin/owner/tenant roles, Better Auth authentication, PostgreSQL on Neon with Drizzle ORM, and Zod typed validation.",
      },
      menufoto: {
        title: "Menufoto — Visual digital menu",
        description:
          "Digital menu for restaurants: a public menu with 5 themes, an admin panel with ADMIN and USER roles, WebP-optimized photos, a QR code and login attempt limiting. Next.js, Prisma, Neon, Vercel Blob and Docker.",
      },
      divisas: {
        title: "Divisas — Exchange rate system",
        description:
          "A protected panel to manage currencies and rates with a change history, plus a public screen built for vertical TVs (1080×1920) that refreshes itself and keeps working offline.",
      },
      cotizador: {
        title: "Crypto quoter — React + Vite",
        description: "A cryptocurrency quoter built with React and Vite.",
      },
      client: {
        title: "Client — React + Vite + Tailwind",
        description:
          "Practice frontend built with React, Vite and Tailwind, with routing and API consumption.",
      },
      server: {
        title: "Server REST API — Express + TypeScript",
        description:
          "Educational REST API with Express, TypeScript and Sequelize on PostgreSQL.",
      },
      frontend: {
        title: "Proyecto-Frontend — basic React",
        description:
          "My first steps with components, state and rendering in React.",
      },
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's work together?",
    description:
      "If you're interested in my profile or want to collaborate on a project, get in touch.",
    emailButton: "Email me",
    githubButton: "View GitHub",
  },

  footer: {
    builtWith: "Built with Next.js, React and Tailwind CSS",
    rights: "All rights reserved.",
  },

  theme: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
};