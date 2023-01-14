/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  pageExtensions:['page.tsx', 'api.ts', 'api.tsx'],

  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  }
}

module.exports = nextConfig
