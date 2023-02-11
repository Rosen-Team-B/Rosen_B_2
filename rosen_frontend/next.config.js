/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        poll: true,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
