import { gql } from '@apollo/client'

export const QUERY_NEWS_ITEMS = gql`
  query newsItems($limit: Int, $start: Int) {
    newsItems(limit: $limit, start: $start) {
      id
      title
    }
  }
`
