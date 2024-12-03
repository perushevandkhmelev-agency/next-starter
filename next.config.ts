import path from 'path'

import { NextConfig } from 'next'

const assetsHost = process.env.ASSETS_HOST

const nextConfig: NextConfig = {
  cleanDistDir: false,
  assetPrefix: assetsHost,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
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

export default nextConfig
