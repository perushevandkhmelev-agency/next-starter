import styled, { css, createGlobalStyle } from 'styled-components'
import config from 'static/fonts/icon/config.json'

export const IconFont = createGlobalStyle`
  @font-face {
    font-family: icon;
    src: url('/static/fonts/icon/icon.woff'), url('/static/fonts/icon/icon.woff2');
    font-weight: normal;
    font-style: normal;
  }
`

const nameToChar = name => {
  const glyph = config.glyphs.find(item => item.css === name)
  if (glyph) {
    return String.fromCodePoint(glyph.code)
  } else {
    return ''
  }
}

export const renderIcon = name => css`
  font-family: ${config.name};
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;

   /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   &:before {
    content: '${nameToChar(name)}';
  }
`

export default styled.i`
  ${props => renderIcon(props.name)}
`
