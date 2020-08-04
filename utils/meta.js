import Helmet from 'react-helmet'
import { colors } from 'utils/style'
import config from 'config'

const dev = process.env.NODE_ENV !== 'production'

const defaultTitle = 'Project'
const defaultDescription = ''
const defaultImage = ''
const vkImage = ''

export function GlobalMeta() {
  return (
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s — ${defaultTitle}`}
      link={[
        {
          rel: 'icon',
          type: 'apple-touch-icon',
          sizes: '180x180',
          href: '/static/favicon/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/static/favicon/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/static/favicon/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/static/favicon/site.webmanifest',
          type: 'application/manifest+json',
          crossOrigin: 'use-credentials'
        },
        { rel: 'mask-icon', href: '/static/favicon/safari-pinned-tab.svg', color: colors.main }
      ]}
      meta={[
        { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },

        { name: 'msapplication-TileColor', content: colors.main },
        { name: 'theme-color', content: '#ffffff' },

        { name: 'description', content: defaultDescription },

        { property: 'vk:image', content: vkImage },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: defaultTitle },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: defaultDescription },
        { property: 'og:image', content: defaultImage },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: defaultDescription },
        { name: 'twitter:image', content: defaultImage }
      ]}
    />
  )
}

function Meta({ title }) {
  return (
    <Helmet
      title={title}
      meta={[
        { property: 'og:title', content: `${title} — ${defaultTitle}` },
        { name: 'twitter:title', content: `${title} — ${defaultTitle}` }
      ]}
    />
  )
}

export default Meta
