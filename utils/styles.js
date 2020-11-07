/* stylelint-disable */
import styled, { css } from 'styled-components'

export const colors = {
  nprogress: 'black',
  main: 'black'
}

export const dimensions = {
  desktop: 600
}

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${dimensions.desktop - 1}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${dimensions.desktop}px) {
      ${css(...args)};
    }
  `
}

export const maxHeight = css`
  height: 100%;
`

export const hidden = (name, before) => {
  const media = `${before ? 'min' : 'max'}-width: ${dimensions[name] - (before ? 0 : 1)}px`
  return css`
    @media (${media}) {
      display: none !important;
    }
  `
}

export const listStyleNone = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListStyleNone = styled.ul`
  ${listStyleNone};
`

export const placeholder = (styles, parent = '&') => ({
  [`${parent}::-webkit-input-placeholder`]: {
    ...styles
  },
  [`${parent}:-moz-placeholder`]: {
    ...styles
  },
  [`${parent}::-moz-placeholder`]: {
    ...styles
  },
  [`${parent}:-ms-input-placeholder`]: {
    ...styles
  }
})
