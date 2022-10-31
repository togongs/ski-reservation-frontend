/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '/',
  },
  swcMinify: true,
  reactStrictMode: false,
  trailingSlash: true,
};

module.exports = nextConfig;
