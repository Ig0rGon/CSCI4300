/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lumiere-a.akamaihd.net',
      },
    ],
  },
};

module.exports = nextConfig;