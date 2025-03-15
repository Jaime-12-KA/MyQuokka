/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyQuokka',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/MyQuokka',
  // 실험적 기능만 유지
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;