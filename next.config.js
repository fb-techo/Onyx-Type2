/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath: '/Onyx-Type2',
  assetPrefix: '/Onyx-Type2',
}

module.exports = nextConfig

