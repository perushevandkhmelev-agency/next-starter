const fs = require('fs')

const config = require('../config')

fetch(`${config.apiUrl}/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', authorization: config.authorization },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then((result) => result.json())
  .then((result) => {
    const possibleTypes = {}

    result.data.__schema.types.forEach((supertype) => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name)
      }
    })

    fs.writeFile('./__generated__/possibleTypes.json', JSON.stringify(possibleTypes), (err) => {
      if (err) {
        console.error('Error writing possibleTypes.json', err)
      } else {
        console.log('Fragment types successfully extracted!')
      }
    })
  })
