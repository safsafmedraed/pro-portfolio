/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pro-portfolio',
  assetPrefix: '/pro-portfolio/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
