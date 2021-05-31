import React from 'react'

import join from 'lodash/join'

type InnerHTML = {
  dangerouslySetInnerHTML: { __html?: string }
}

interface HTMLTextProps {
  text?: string
  html?: string
  component?: string | React.FunctionComponent<InnerHTML> | React.ComponentClass<InnerHTML>
  paragraphMode?: boolean
}

const HTMLText: React.FC<HTMLTextProps> = ({ text, html, component = 'span', paragraphMode, ...props }) => {
  let innerHTML = html
  if (text) {
    if (paragraphMode) {
      innerHTML = join(
        text.split(/(?:\r)?\n/).map((chunk) => `<p>\n${chunk}\n</p>\n`),
        ''
      )
    } else {
      innerHTML = text.replace(/(?:\r)?\n/g, '<br/>')
    }
  }

  if (innerHTML) {
    return React.createElement(component, {
      ...props,
      dangerouslySetInnerHTML: { __html: innerHTML }
    })
  }
  return null
}

export default HTMLText
