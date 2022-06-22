const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withPlugins([withImages, withFonts], {
  images: {
    disableStaticImages: true
  },
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
