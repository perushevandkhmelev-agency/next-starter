/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  cleanDistDir: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
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
}
