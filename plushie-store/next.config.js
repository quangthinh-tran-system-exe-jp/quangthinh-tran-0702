/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/plushie-store' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/plushie-store/' : '',
}

module.exports = nextConfig