import { useMemo } from 'react'

import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import fetch from 'isomorphic-unfetch'

let apolloClient: ApolloClient<NormalizedCacheObject>

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'same-origin',
    useGETForQueries: true
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const newApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    newApolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return newApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = newApolloClient

  return newApolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
