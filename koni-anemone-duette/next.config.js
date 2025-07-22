/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge',
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
}

module.exports = nextConfig
