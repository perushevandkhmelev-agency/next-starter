import localFont from 'next/font/local'

export const iconFont = localFont({
  src: [{ path: './icon.woff2' }, { path: './icon.woff' }],
  variable: '--font-icon',
  display: 'block',
  preload: false
})
