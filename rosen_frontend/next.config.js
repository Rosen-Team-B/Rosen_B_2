/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['127.0.0.1'],
  },
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
