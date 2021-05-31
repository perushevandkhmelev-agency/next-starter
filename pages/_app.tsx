import 'normalize.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { IconFont } from 'components/Icon'
import { useApollo } from 'utils/apolloClient'
import GlobalStyles from 'utils/globalStyles'
import { GlobalMeta } from 'utils/meta'
import { RootThemeProvider } from 'utils/styles'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <RootThemeProvider>
      <GlobalMeta />
      <GlobalStyles />
      <IconFont />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RootThemeProvider>
  )
}

export default App
