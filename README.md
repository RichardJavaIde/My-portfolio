# Portafolio de Richard 🚀

> **Portafolio personal** — una página de una sola vista para que empresas que buscan desarrolladores vean las habilidades y proyectos de Richard. Hecha como proyecto de **aprendizaje guiado por fases**: cada pieza tiene un propósito didáctico documentado.
>
> **Richard's personal portfolio** — a single-page site for companies hiring developers to see Richard's skills and projects. Built as a phase-by-phase learning project.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · pnpm · next-themes

---

## 🧰 Tecnologías y por qué

| Tecnología | Versión | Rol en el proyecto |
|---|---|---|
| **Next.js** (App Router) | 16.3.5 | Framework: Server Components para el layout, Client Components para lo interactivo. Render estático de la página. |
| **React** | 19.2.8 | Librería base de componentes. |
| **TypeScript** | ^5 | Tipado estricto (`strict: true`). El compilador es quien "avisa" si falta una traducción. |
| **Tailwind CSS** | v4 (^4) | Estilos utilitarios CSS-first (sin `tailwind.config`). El dark mode se define con `@custom-variant`. |
| **pnpm** | 11.25 | Gestor de paquetes (Corepack). Rápido y con un workspace file para autorizar builds. |
| **next-themes** | 0.4.6 | Toggle de tema claro/oscuro: persistencia en `localStorage` y script anti-flash. |

---

## ▶️ Comandos usados (quickstart)

Requisito: Node.js + pnpm (se activa con `corepack enable`).

```bash
# 1. Instalar dependencias (lee package.json + pnpm-lock.yaml)
pnpm install

# 2. Levantar el servidor de desarrollo
pnpm dev
#    ⚠️ Si el puerto 3000 está ocupado (p. ej. por el dev server de Rentia):
pnpm dev -p 3001     # → http://localhost:3001

# 3. Compilación de producción (type-check + lint + generar páginas estáticas)
pnpm build

# 4. Servir la build de producción localmente
pnpm start

# 5. Lint (ESLint)
pnpm lint
```

**Dependencias que se agregaron a mano:**

```bash
pnpm add next-themes      # dark mode (toggle manual con persistencia)
```

```jsonc
// package.json — dependencias resultantes
"dependencies": {
  "next": "16.3.5",
  "react": "19.2.8",
  "react-dom": "19.2.8",
  "next-themes": "0.4.6"
}
```

---

## 📁 Estructura del proyecto

```
src/
├─ app/
│  ├─ layout.tsx          (Server) html lang + ThemeProvider + LangProvider + Navbar + Footer
│  ├─ page.tsx            (Server) compone las 5 secciones
│  ├─ icon.svg            favicon SVG: logo de la pestaña (R de Richard + punto cyan)
│  ├─ favicon.ico         fallback clásico para navegadores/tabs antiguas
│  └─ globals.css         @import "tailwindcss" + @custom-variant dark + color-scheme
├─ components/
│  ├─ layout/             Navbar, Footer, LangToggle, ThemeToggle  (Client)
│  ├─ sections/           Hero, About, Skills, Projects, Contact  (Client)
│  └─ ui/                 primitivas puras: Container, Section, SectionHeading, Button, Card, Tag
├─ context/
│  └─ lang-context.tsx    (Client) LangProvider + useLang() / useDictionary()
├─ i18n/dictionaries/
│  ├─ es.ts               const es  +  export type Dictionary = typeof es  (fuente de verdad)
│  └─ en.ts               const en: Dictionary (el tipo obliga a cubrir todas las claves)
├─ data/
│  ├─ profile.ts          nombre, GitHub, email
│  ├─ skills.ts           grupos de habilidades (categorías bilingües)
│  └─ projects.ts         proyectos: estructura + stack + links
└─ lib/
   └─ cn.ts               helper zero-dep para unir clases condicionalmente
```

**¿Por qué Client / Server?** Todo componente que use un hook (`useDictionary`, `useTheme`, `useState`…) es **Client Component**. `layout.tsx` y `page.tsx` son **Server** (no usan hooks). Las primitivas `ui/` no usan hooks: reciben todo por props.

> Nota: `next.config.ts` solo define `remotePatterns` para que `next/image` pueda optimizar el avatar desde `github.com` / `avatars.githubusercontent.com`. El alias `@/*` → `./src/*` está en `tsconfig.json`.

---

## ✨ Funcionalidades

### 🌐 Bilingüe Español ↔ Inglés (sistema propio, sin librería externa)

- **`es.ts` es la fuente de verdad**: exporta `type Dictionary = typeof es`.
- **`en.ts`** se declara `const en: Dictionary` → TypeScript marca en rojo **cualquier clave que falte**. Es el seguro anti-traducciones-olvidadas.
- Sin `as const`: la anotación ensancha los valores a `string` y permite que ambas lenguas tengan textos distintos, conservando la estructura de claves.
- `LangProvider` guarda la elección en `localStorage` (`portfolio-lang`) y escribe `document.documentElement.lang`.

### 🌙 Modo oscuro (next-themes, toggle manual con persistencia)

| Detalle | Valor |
|---|---|
| Provider | `<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} />` |
| Persistencia | `localStorage` bajo la clave `portfolio-theme` |
| Cómo aplica el tema | Pone/quito la clase `.dark` en `<html>` |
| Anti-flash | Un `<script>` de next-themes lee el localStorage **antes** del primer paint |
| Hidratación | `<html lang="es" suppressHydrationWarning>` (el cliente puede diferir del server por el anti-flash) |

**La pieza clave de Tailwind v4** (en `globals.css`):

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Tailwind v4 ya no usa `tailwind.config`; esta línea le enseña a `dark:` a responder cuando `<html>` (o un ancestro) lleva `.dark`. También forzamos `color-scheme` para que scrollbars y controles nativos sigan el tema elegido (manejamos solo manual, no seguimos al sistema).

**Paleta oscura:** fondo `slate-950` · superficies (cards/navbar) `slate-900` · secciones alternas `slate-900/50` · textos `slate-300..100` · acento `cyan-400`.

### 🧩 Contenido dirigido por datos

Los componentes **no tienen texto hardcodeado**:  ✓ datos guardan *estructura* (stack, links, ids)  ✓ diccionarios guardan *texto* (títulos, descripciones).

**Regla de oro para agregar un proyecto:** 2 líneas en `src/data/projects.ts` + 3 en el diccionario de cada idioma (`es.ts` y `en.ts`). El compilador te obliga a las dos lenguas.

---

## 🧭 Las 5 secciones

1. **Inicio** (Hero) — nombre, rol, CTAs + avatar desde GitHub.
2. **Sobre mí** — presentación + "cosas que me definen".
3. **Habilidades** — grid 1→2→4 columnas, por área.
4. **Proyectos** — tarjetas; el proyecto *featured* ocupa ancho completo. El repo principal es `SistemaArquileres` (Rentia).
5. **Contacto** — sin formulario en v1: botones `mailto:` + GitHub.

---

## 🔧 Configuraciones particulares

- **`pnpm-workspace.yaml`** — pnpm 11 exige autorizar el build script de `unrs-resolver` (dependencia de ESLint): `allowBuilds: { unrs-resolver: true }`. Sin esto pnpm aborta el install.
- **`tsconfig.json`** — `strict: true`, `moduleResolution: "bundler"`, path alias `@/* → ./src/*`.
- **`next.config.ts`** — `images.remotePatterns` para el avatar de GitHub.
- **Next 16 genera automáticamente** `AGENTS.md`/`CLAUDE.md` en la raíz (reglas para agentes de IA). Se re-crean con `next dev`; son inofensivos.

---

## 🚀 Despliegue

El deploy recomendado es **Vercel** (gratis para proyectos personales y nativo para Next.js):

1. Sube el repo a GitHub.
2. Importa el repo en [vercel.com](https://vercel.com/new) — detecta Next.js solo.
3. Sin variables de entorno requeridas (todo es estático y el texto vive en el código).

---

## 📌 Estado actual

- ✅ Página completa con las 5 secciones, bilingüe ES/EN.
- ✅ Dark mode manual con persistencia.
- ✅ Email real en `src/data/profile.ts` (botón "Escríbeme" → mailto).
- ⏳ Pendiente: publicar el deploy.

Hecho con Next.js, React y Tailwind CSS · Aprendizaje por fases con proyectos reales.