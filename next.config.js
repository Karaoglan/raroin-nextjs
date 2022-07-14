/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://ipfs.io'],
  },
  target: "serverless", //TODO add for netlify CHECK CAUTION
}

module.exports = nextConfig
