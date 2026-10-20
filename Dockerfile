# syntax=docker/dockerfile:1

# ---------- Base: Node + pnpm ----------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm@11
WORKDIR /app

# ---------- 1) Dependencias (se cachea mientras no cambie el lockfile) ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ---------- 2) Build de Next.js ----------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Este proyecto no tiene carpeta public/; la creamos vacía para que el COPY final no falle.
RUN mkdir -p public
RUN pnpm build

# ---------- 3) Imagen final (solo lo necesario para correr) ----------
FROM node:22-alpine AS runner
# La versión llega desde el workflow (ej. 0.2.0) y queda como etiqueta de la imagen.
ARG APP_VERSION=dev
LABEL org.opencontainers.image.version=$APP_VERSION

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
WORKDIR /app

# Usuario sin privilegios (no correr como root).
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
