import styled, { css } from 'styled-components'
import config from 'assets/fonts/icon/config.json'

export const IconFont = () => (
  <style global jsx>
    {`
      @font-face {
        font-family: icon;
        src: url('${require('/assets/fonts/icon/icon.woff')}'), url('${require('/assets/fonts/icon/icon.woff2')}');
        font-weight: normal;
        font-style: normal;
      }
    `}
  </style>
)

const nameToChar = (name) => {
  const glyph = config.glyphs.find((item) => item.css === name)
  if (glyph) {
    return String.fromCodePoint(glyph.code)
  } else {
    return ''
  }
}

export const renderIcon = (name) => css`
  text-transform: none;
  font-family: ${config.name};
  speak: none;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: '${nameToChar(name)}';
  }
`

export default styled.i`
  ${(props) => renderIcon(props.name)}
`
