import React from 'react'

import Head from 'next/head'

type LinkTags = React.LinkHTMLAttributes<HTMLLinkElement>[]
type MetaTags = React.MetaHTMLAttributes<HTMLMetaElement>[]
type ScriptTags = React.ScriptHTMLAttributes<HTMLScriptElement>[]

const defaultTitle = 'Create Next App'

let linkTags: LinkTags = [
  {
    rel: 'icon',
    type: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png'
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
    type: 'application/manifest+json',
    crossOrigin: 'use-credentials'
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#000000'
  }
]

const metaTags: MetaTags = [
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { property: 'og:site_name"', content: defaultTitle },
  { name: 'msapplication-TileColor', content: '#000000' },
  { name: 'theme-color', content: '#ffffff' }
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
