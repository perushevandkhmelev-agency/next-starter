import { ThemeProvider, css } from 'styled-components'

import createBreakpoints, { Breakpoint, breakpointsValues } from './createBreakpoints'

export { breakpointsValues }

export const breakpoints = createBreakpoints()

export const RootThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        breakpoints,
        colors,
        hidden,
        notTouchScreen,
        listStyleNone,
        resetButton,
        placeholder
      }}>
      {children}
    </ThemeProvider>
  )
}

export const colors = {
  nprogress: 'black',
  primary: 'black'
} as const

export const hidden = (breakpoint: Breakpoint, query?: 'up' | 'only') => {
  let mediaQuery = breakpoints.down(breakpoint)
  if (query === 'up') {
    mediaQuery = breakpoints.up(breakpoint)
  } else if (query === 'only') {
    mediaQuery = breakpoints.only(breakpoint)
  }
  return css`
    ${mediaQuery} {
      display: none !important; /* stylelint-disable-line */
    }
  `
}

export const notTouchScreen = '@media (hover), (min--moz-device-pixel-ratio: 0)' as const

export const listStyleNone = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const resetButton = css`
  padding: 0;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
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

export const SrOnly = css`
  position: absolute;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`
