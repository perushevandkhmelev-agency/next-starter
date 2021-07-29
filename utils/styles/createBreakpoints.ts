export const breakpointsValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
  xxl: 2650
} as const

export const breakpointsOptions = {
  values: breakpointsValues,
  unit: 'px',
  step: 5
} as const

export type Breakpoint = keyof typeof breakpointsValues
export type BreakpointValues = { [key in Breakpoint]: number }

export type BreakpointsOptions = {
  values?: BreakpointValues
  unit?: string
  step?: number
}

export type Breakpoints = {
  keys: Breakpoint[]
  up: (key: Breakpoint | number) => string
  down: (key: Breakpoint | number) => string
  between: (start: Breakpoint | number, end: Breakpoint | number) => string
  only: (key: Breakpoint) => string
} & typeof breakpointsOptions

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(): Breakpoints {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values,
    unit,
    step
  } = breakpointsOptions

  const keys = Object.keys(values) as Breakpoint[]

  function up(key: Breakpoint | number) {
    const value = typeof key === 'number' ? key : values[key]
    return `@media (min-width:${value}${unit})`
  }

  function down(key: Breakpoint | number) {
    const value = typeof key === 'number' ? key : values[key]
    return `@media (max-width:${value - step / 100}${unit})`
  }

  function between(start: Breakpoint | number, end: Breakpoint | number) {
    const endIndex = keys.indexOf(end as Breakpoint)
    const minWidth = typeof start === 'number' ? start : values[start]
    const maxWidth = (endIndex !== -1 && typeof end === 'number' ? end : values[keys[endIndex]]) - step / 100

    return `@media (min-width:${minWidth}${unit}) and (max-width:${maxWidth}${unit})`
  }

  function only(key: Breakpoint) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1])
    }

    return up(key)
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    unit,
    step
  }
}

export default createBreakpoints
