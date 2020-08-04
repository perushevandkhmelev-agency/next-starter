import React from 'react'
import PropTypes from 'prop-types'
import join from 'lodash/join'

function HTMLText({ text, html, component, paragraphMode, ...props }) {
  if (text) {
    if (paragraphMode) {
      html = join(
        text.split(/(?:\r)?\n/).map((chunk) => `<p>\n${chunk}\n</p>\n`),
        ''
      )
    } else {
      html = text.replace(/(?:\r)?\n/g, '<br/>')
    }
  }

  if (html) {
    return React.createElement(component, {
      ...props,
      dangerouslySetInnerHTML: { __html: html }
    })
  } else {
    return null
  }
}

HTMLText.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

HTMLText.defaultProps = {
  component: 'span'
}

export default HTMLText
