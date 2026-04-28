import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  output: 'export',

  // Disable webpack cache for Cloudflare Pages deployment
  webpack: (config) => {
    config.cache = false;
    return config;
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img3.doubanio.com',
      },
      {
        protocol: 'https',
        hostname: 'img1.doubanio.com',
      },
      {
        protocol: 'https',
        hostname: 'img2.doubanio.com',
      },
      {
        protocol: 'https',
        hostname: 'img9.doubanio.com',
      },
    ],
  },
};

export default nextConfig;
