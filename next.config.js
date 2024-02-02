/** @type {import('next').NextConfig} */

const path = require('path')

const assetsHost = process.env.ASSETS_HOST

module.exports = {
  cleanDistDir: false,
  assetPrefix: assetsHost,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    }
  },
  experimental: {
    scrollRestoration: true
  }
  // images: {
  //   deviceSizes: [600, 960, 1280, 1920, 2650],
  //   path: assetsHost ? `${assetsHost}/_next/image` : undefined,
  //   domains: ['host']
  // }
}
