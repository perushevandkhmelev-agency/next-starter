import 'styles/base/preflight.scss'
import 'styles/base/fonts.scss'
import 'styles/base/globals.scss'
import 'styles/base/icon-codes.css'

import 'focus-visible'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { useApollo } from 'utils/apolloClient'
import { GlobalMeta } from 'utils/meta'

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
