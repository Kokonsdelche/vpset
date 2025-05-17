/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vpset',
  assetPrefix: '/vpset/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig; 