import React from 'react'

import Head from 'next/head'

type LinkTags = React.LinkHTMLAttributes<HTMLLinkElement>[]
type MetaTags = React.MetaHTMLAttributes<HTMLMetaElement>[]
type ScriptTags = React.ScriptHTMLAttributes<HTMLScriptElement>[]

// const websiteUrl = ''
const defaultTitle = 'Create Next App'
// const defaultDescription = ''
// const defaultImage = ''

const linkTags: LinkTags = [
  // {
  //   rel: 'icon',
  //   type: 'image/png',
  //   sizes: '96x96',
  //   href: `${websiteUrl}/favicon/favicon-96x96.png`
  // },
  // {
  //   rel: 'icon',
  //   type: 'image/svg+xml',
  //   href: `${websiteUrl}/favicon/favicon.svg`
  // },
  // {
  //   rel: 'shortcut icon',
  //   href: `${websiteUrl}/favicon/favicon.ico`
  // },
  // {
  //   rel: 'apple-touch-icon',
  //   sizes: '180x180',
  //   href: `${websiteUrl}/favicon/apple-touch-icon.png`
  // },
  // {
  //   rel: 'manifest',
  //   href: `${websiteUrl}/favicon/site.webmanifest`,
  //   type: 'application/manifest+json',
  //   crossOrigin: 'use-credentials'
  // },
  // {
  //   rel: 'canonical',
  //   href: websiteUrl
  // }
]

const metaTags: MetaTags = [
  // { property: 'og:site_name', content: defaultTitle },
  // { property: 'og:url', content: websiteUrl },
  // { property: 'og:type', content: 'website' },
  // { name: 'description', content: defaultDescription },
  // { property: 'og:description', content: defaultDescription },
  // { name: 'twitter:description', content: defaultDescription },
  { name: 'theme-color', content: '#000000' }
  // { name: 'twitter:card', content: 'summary_large_image' },
  // { name: 'image_src', content: defaultImage },
  // { property: 'og:image', content: defaultImage },
  // { name: 'twitter:image', content: defaultImage }
]

export const GlobalMeta = React.memo(function Meta() {
  return (
    <Head>
      <title>{defaultTitle}</title>
      {metaTags.map((meta, index) => (
        <React.Fragment key={String(index)}>
          <meta {...meta} />
        </React.Fragment>
      ))}
      {linkTags.map((link, index) => (
        <React.Fragment key={String(index)}>
          <link {...link} />
        </React.Fragment>
      ))}
    </Head>
  )
})

interface MetaProps {
  title?: string
  description?: string
  image?: string
  css?: string[]
  js?: string[]
}

function Meta({ title, description, image, css, js }: MetaProps) {
  let linkTags: LinkTags = []
  let metaTags: MetaTags = []
  let scriptTags: ScriptTags = []

  if (title) {
    metaTags = metaTags.concat([
      { property: 'og:title', content: title },
      { name: 'twitter:title', content: title }
    ])
  }

  if (description) {
    metaTags = metaTags.concat([
      { name: 'description', content: description },
      { property: 'og:description', content: description },
      { name: 'twitter:description', content: description }
    ])
  }

  if (image) {
    metaTags = metaTags.concat([
      { name: 'image_src', content: image },
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image }
    ])
  }

  if (css && css.length > 0) {
    linkTags = linkTags.concat(css.map((href) => ({ rel: 'stylesheet', href })))
  }

  if (js && js.length > 0) {
    scriptTags = scriptTags.concat(js.map((src) => ({ src })))
  }

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      {metaTags.map((meta, index) => (
        <React.Fragment key={String(index)}>
          <meta {...meta} />
        </React.Fragment>
      ))}
      {linkTags.map((link, index) => (
        <React.Fragment key={String(index)}>
          <link {...link} />
        </React.Fragment>
      ))}
      {scriptTags.map((script, index) => (
        <React.Fragment key={String(index)}>
          <script {...script} />
        </React.Fragment>
      ))}
    </Head>
  )
}

export default Meta
