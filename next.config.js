/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    allowedDevOrigins: ['preview-chat-80c23a8a-fb2a-4025-8ab1-89008a936a03.space.z.ai']
  }
}

module.exports = nextConfig