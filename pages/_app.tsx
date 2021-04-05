import 'normalize.css'
import { ApolloProvider } from '@apollo/client'
import { AppContext, AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import { IconFont } from 'components/Icon'
import { initializeApollo, useApollo } from 'utils/apolloClient'
import GlobalStyles from 'utils/globalStyles'
import { GlobalMeta } from 'utils/meta'
import { RootThemeProvider } from 'utils/styles'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

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

App.getInitialProps = async ({ ctx, Component }: AppContext) => {
  const pageProps = {}

  if (Component.getInitialProps) {
    const apolloClient = initializeApollo({})
    const passProps = { ...ctx, apolloClient }
    Object.assign(pageProps, await Component.getInitialProps(passProps))
  }

  return { pageProps }
}

export default App
