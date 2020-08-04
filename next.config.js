require('dotenv').config()

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    AUTHORIZATION: process.env.AUTHORIZATION
  },
  webpack: config => {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js')
      }

      return entries
    }

    config.node = config.node || {}
    config.node.fs = 'empty'

    return config
  }
}
