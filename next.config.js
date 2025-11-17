/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    images: {
      // Allow any external domain
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        {
          protocol: 'http',
          hostname: '**',
        },
      ],
      // Optional: disable static image optimization for all images
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  