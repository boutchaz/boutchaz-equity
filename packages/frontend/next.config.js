/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
})

module.exports = nextConfig
