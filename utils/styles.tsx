/* stylelint-disable */
import styled, { css } from 'styled-components'

export const colors = {
  nprogress: 'black',
  main: 'black'
}

export const dimensions: Record<string, number> = {
  desktop: 600
}

export const media = (dimension: string, maxDimension?: string, maxWidth?: boolean) => {
  const isMobile: boolean = dimension === 'mobile'
  const mobileDimension: number | '' | undefined = dimensions[Object.keys(dimensions)[0]]
  const getMaxDimension: number | '' | undefined = maxDimension && dimensions[maxDimension]
  return getMaxDimension
    ? `@media (min-width: ${dimensions[dimension]}px) and (max-width: ${getMaxDimension - 1}px)`
    : `@media (${isMobile || maxWidth ? 'max' : 'min'}-width: ${
        isMobile ? mobileDimension - 1 : dimensions[dimension] - (maxWidth ? -1 : 0)
      }px)`
}

export const maxHeight = css`
  height: 100%;
`

export const hidden = (name: string, before: boolean) => {
  const sizePage = `${before ? 'min' : 'max'}-width: ${dimensions[name] - (before ? 0 : 1)}px`
  return css`
    @media (${sizePage}) {
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

export const placeholder = (styles: Record<string, number>, parent = '&') => ({
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
