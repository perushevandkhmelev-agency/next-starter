import React from 'react'

import join from 'lodash/join'

type HTMLTextProps = {
  component?:
    | React.ComponentType<{
        dangerouslySetInnerHTML: { __html: string }
        ref: React.Ref<HTMLElement>
      }>
    | string
  text?: string
  html: string
  paragraphMode?: boolean
}

const HTMLText = React.forwardRef<HTMLElement, HTMLTextProps>((props, ref) => {
  const { text, html, component = 'span', paragraphMode, ...otherProps } = props

  let htmlCode = html
  if (text) {
    if (paragraphMode) {
      htmlCode = join(
        text.split(/(?:\r)?\n/).map((chunk) => `<p>\n${chunk}\n</p>\n`),
        ''
      )
    } else {
      htmlCode = text.replace(/(?:\r)?\n/g, '<br/>')
    }
  }

  if (htmlCode) {
    return React.createElement(component, {
      ...otherProps,
      ref,
      dangerouslySetInnerHTML: { __html: htmlCode }
    })
  }
  return null
})

export default HTMLText
