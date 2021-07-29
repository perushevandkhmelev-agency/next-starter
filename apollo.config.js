const config = require('./config')

module.exports = {
  client: {
    service: {
      name: 'next-starter',
      url: `${config.apiUrl}/graphql`
      // headers: {
      //   authorization: config.authorization
      // }
    },
    includes: ['schemas/*']
  }
}
