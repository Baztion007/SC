import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" works well with Docker, Netlify (via their Next.js runtime),
  // and Cloudflare (via @cloudflare/next-on-pages adapter).
  // For GitHub Pages (static-only), see the README deployment notes —
  // you would switch to `output: "export"` and disable the contact API.
  output: "standalone",
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "postimg.cc" },
      { protocol: "https", hostname: "r2cdn.perplexity.ai" },
    ],
    // Allow unoptimized images as a fallback for static-export deployments
    // (GitHub Pages). When using the Next.js image optimizer (default on
    // Netlify/Cloudflare/Vercel), this stays false.
    unoptimized: false,
  },
  // Explicitly mark experimental features used.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
