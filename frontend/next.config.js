/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org"],
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;

