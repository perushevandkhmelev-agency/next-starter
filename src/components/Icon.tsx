import React from 'react'

import clsx from 'clsx'

import { iconFont } from '#/assets/fonts/icon/icon'

export type IconProps = React.HTMLAttributes<HTMLElement> & {
  name: string
  as?: React.ElementType
  preventAriaHidden?: boolean
}

export default function Icon({ as, name, preventAriaHidden, ...props }: IconProps) {
  return React.createElement(as || 'i', {
    ...props,
    className: clsx(iconFont.className, `icon-${name}`, props.className),
    'aria-hidden': as !== 'button' && !preventAriaHidden ? true : undefined
  })
}
