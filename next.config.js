/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: 'via.placeholder.com' },
    ],
  },
}

module.exports = nextConfig
