import styled, { ThemeProvider, css } from 'styled-components'

export const colors: Record<string, string> = {
  nprogress: 'black',
  main: 'black'
}

export const dimensions: Record<string, number> = {
  desktop: 600
}

const maxWidthMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`
const minWidthMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

export const media = {
  mobile: maxWidthMediaQuery(dimensions.desktop - 1),
  desktop: minWidthMediaQuery(dimensions.desktop),
  notTouchScreen: '@media (hover), (min--moz-device-pixel-ratio: 0)'
}

export const maxHeight = css`
  height: 100%;
`

export const hidden = (name: string, before?: boolean) => {
  const mediaQuery = `${before ? 'min' : 'max'}-width: ${dimensions[name] - (before ? 0 : 1)}px`
  return css`
    @media (${mediaQuery}) {
      display: none !important; /* stylelint-disable-line */
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

export const RootThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        media,
        colors
      }}>
      {children}
    </ThemeProvider>
  )
}
