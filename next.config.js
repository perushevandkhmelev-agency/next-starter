const withFonts = require('next-fonts')

module.exports = withFonts({
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    scrollRestoration: true,
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}'
      }
    }
  }
})
