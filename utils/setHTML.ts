import join from 'lodash/join'

type SetHTMLTextParams = {
  html: string
  text?: string
  paragraphMode?: boolean
}

function setHTML({ html, text, paragraphMode }: SetHTMLTextParams) {
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
    return { dangerouslySetInnerHTML: { __html: htmlCode } }
  }

  return {}
}

export default setHTML
