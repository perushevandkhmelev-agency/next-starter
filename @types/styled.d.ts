import 'styled-components'

import { colors, hidden, notTouchScreen, placeholder } from 'utils/styles'
import type { Breakpoints } from 'utils/styles/createBreakpoints'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints
    colors: typeof colors
    hidden: typeof hidden
    notTouchScreen: typeof notTouchScreen
    listStyleNone: ThemedCssFunction
    resetButton: ThemedCssFunction
    placeholder: typeof placeholder
  }
}
