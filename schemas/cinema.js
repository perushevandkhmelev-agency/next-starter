import gql from 'graphql-tag'

export const QUERY_ALL_CINEMA_DETAILS = gql`
  query($first: Int, $last: Int) {
    allCinemaDetails(first: $first, last: $last) {
      edges {
        node {
          slug
          hallName
        }
      }
    }
  }
`
