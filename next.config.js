/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'cdn.vnda.com.br' },
    ],
  },
}

module.exports = nextConfig
