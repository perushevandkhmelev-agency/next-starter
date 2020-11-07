import React from 'react'
import PropTypes from 'prop-types'
import join from 'lodash/join'

function HTMLText({ text, html, component, paragraphMode, ...props }) {
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

HTMLText.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

HTMLText.defaultProps = {
  component: 'span'
}

export default HTMLText
