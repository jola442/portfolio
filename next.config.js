/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,          // check for changes every second
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig
