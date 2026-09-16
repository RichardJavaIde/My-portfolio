import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite que next/image cargue el avatar desde GitHub.
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

export default nextConfig;