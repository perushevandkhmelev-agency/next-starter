import 'normalize.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import { GlobalMeta } from 'utils/meta'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo, useApollo } from 'utils/apolloClient'
import GlobalStyles from 'utils/globalStyles'
import { IconFont } from 'components/Icon'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <GlobalMeta />
      <GlobalStyles />
      <IconFont />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    const apolloClient = initializeApollo()
    Object.assign(pageProps, await Component.getInitialProps({ ...ctx, apolloClient }))
  }

  return { pageProps }
}

export default App
