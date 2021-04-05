const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins([withImages, withFonts], {
  webpack: (config, { dev, isServer }) => {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js')
      }

      return entries
    }

    if (dev && isServer) {
      config.plugins.push(
        ...[
          new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
          new StylelintPlugin({ files: '**/*.{js,jsx,ts,tsx}' }),
          new ForkTsCheckerWebpackPlugin()
        ]
      )
    }

    config.node = config.node || {}
    config.node.fs = 'empty'

    return config
  }
})
