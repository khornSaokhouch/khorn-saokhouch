/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  images: {
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
    unoptimized: true,
  },

  // ✅ Add i18n config
  i18n: {
    locales: ['en', 'km'],   // English + Khmer
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
