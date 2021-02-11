import React from 'react'
import join from 'lodash/join'

interface HTMLTextProps {
  text?: string
  html?: string
  component?:
    | string
    | React.FunctionComponent<{ dangerouslySetInnerHTML: { __html: string | undefined } }>
    | React.ComponentClass<{ dangerouslySetInnerHTML: { __html: string | undefined } }>
  paragraphMode?: boolean
}

const HTMLText: React.FC<HTMLTextProps> = ({ text, html, component = 'span', paragraphMode, ...props }) => {
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
      ...props,
      dangerouslySetInnerHTML: { __html: html }
    })
  }
  return null
}

export default HTMLText
