/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  // build for static export
  basePath: '/pro-portfolio', // Match repo name
  // assetPrefix: '/pro-portfolio/', // Fixes CSS/JS paths
  // trailingSlash: true, // Ensures `/` endings
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: { unoptimized: true },
};

module.exports = nextConfig;
