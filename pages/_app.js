import NProgress from 'nprogress'
import Router from 'next/router'
import { GlobalMeta } from 'utils/meta'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalMeta />
      <Component {...pageProps} />
    </>
  )
}
