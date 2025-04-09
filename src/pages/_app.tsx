import '#/styles/globals.css'
import '#/styles/js-focus-visible.css'
import '#/styles/nprogress.css'
import '#/styles/icon.css'
import '#/styles/icon-codes.css'

import 'focus-visible'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { GlobalMeta } from '#/components/Meta'
import { useApollo } from '#/utils/apolloClient'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <GlobalMeta />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default App
