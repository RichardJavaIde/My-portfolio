import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera .next/standalone: un servidor mínimo con solo lo necesario.
  // Hace la imagen de Docker mucho más pequeña.
  output: "standalone",
  images: {
    // Permite que next/image cargue el avatar desde GitHub.
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;