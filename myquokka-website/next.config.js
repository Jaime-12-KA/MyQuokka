/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyQuokka',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/MyQuokka',
};

module.exports = nextConfig;