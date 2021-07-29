import Helmet, { HelmetProps } from 'react-helmet'

import { colors } from 'utils/styles'

const defaultTitle = 'Project'
const defaultDescription = ''
const defaultImage = ''
const vkImage = ''

export const GlobalMeta = () => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s — ${defaultTitle}`}
      // link={[
      //   {
      //     rel: 'icon',
      //     type: 'apple-touch-icon',
      //     sizes: '180x180',
      //     href: '/favicon/apple-touch-icon.png'
      //   },
      //   {
      //     rel: 'icon',
      //     type: 'image/png',
      //     sizes: '32x32',
      //     href: '/favicon/favicon-32x32.png'
      //   },
      //   {
      //     rel: 'icon',
      //     type: 'image/png',
      //     sizes: '16x16',
      //     href: '/favicon/favicon-16x16.png'
      //   },
      //   {
      //     rel: 'manifest',
      //     href: '/favicon/site.webmanifest',
      //     type: 'application/manifest+json',
      //     crossOrigin: 'use-credentials'
      //   },
      //   { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: colors.primary }
      // ]}
      meta={[
        { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },

        { name: 'msapplication-TileColor', content: colors.primary },
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

const Meta = ({ title }: HelmetProps) => {
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
