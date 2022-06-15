import styled, { css } from 'styled-components'

import config from 'assets/fonts/icon/config.json'

interface IconProps {
  name: string
}

export const IconFont = () => (
  <style global jsx>
    {`
      @font-face {
        font-family: icon;
        src: url('${require('assets/fonts/icon/icon.woff').default}'),
          url('${require('assets/fonts/icon/icon.woff2').default}');
        font-weight: normal;
        font-style: normal;
      }
    `}
  </style>
)

const nameToChar = (name: string) => {
  const glyph = config.glyphs.find((item) => item.css === name)
  if (glyph) {
    return String.fromCodePoint(glyph.code)
  }
  return ''
}

export const renderIcon = (name: string) => css`
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

export default styled.i
  .attrs(
    (
      props //@ts-ignore
    ) => (!props.as ? { 'aria-hidden': true } : {})
  )
  .withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => !['name'].includes(prop) && defaultValidatorFn(prop)
  })`
  ${(props: IconProps) => renderIcon(props.name)}
`
