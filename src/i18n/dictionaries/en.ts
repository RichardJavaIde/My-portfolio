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
      "Richard's portfolio: a full-stack web developer focused on Next.js, React and TypeScript.",
  },

  nav: [
    { label: "Home", href: "#inicio" },
    { label: "About", href: "#sobre-mi" },
    { label: "Skills", href: "#habilidades" },
    { label: "Projects", href: "#proyectos" },
    { label: "Contact", href: "#contacto" },
  ],

  hero: {
    greeting: "Hi, I'm",
    name: "Richard Duran",
    role: "Full-stack developer with Next.js",
    summary:
      "I build modern, complete web applications with Next.js, React, TypeScript and the serverless ecosystem.",
    primaryCta: "See my projects",
    secondaryCta: "View GitHub",
  },

  about: {
    eyebrow: "About me",
    title: "Learning in public and building for real",
    paragraphs: [
      "I'm Richard, a web developer learning through guided phases. I believe in learning by doing: every new concept goes into a real project, not a throwaway exercise.",
      "My main project is Rentia, a complete rental management system: authentication, cloud database, role-based dashboards and typed validation. I built it from scratch and document everything in a phase-by-phase learning journal.",
    ],
    highlightsTitle: "What defines me",
    highlights: [
      "Focus on the Next.js ecosystem",
      "Databases with PostgreSQL and Drizzle ORM",
      "Phase-based learning with real projects",
      "Documenting every step of the way",
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "My technology ecosystem",
    description: "Technologies I use and practice every day, grouped by area.",
  },

  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    description: "From my main full-stack project to my foundational practice.",
    featuredBadge: "Featured",
    repoButton: "View repo",
    liveButton: "Live demo",
    items: {
      rentia: {
        title: "Rentia — Rental management system",
        description:
          "Full-stack rental management platform: admin/owner/tenant roles, Better Auth authentication, PostgreSQL on Neon with Drizzle ORM, and Zod typed validation.",
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