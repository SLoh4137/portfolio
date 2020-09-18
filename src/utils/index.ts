import { CssVarsKeys, SPACING } from "constants/index"

export const cssVar = (str: CssVarsKeys) => `var(--${str})`

export const breakpointQuery = (breakpoint: string) => `@media(min-width: ${breakpoint})`

export const spacing = (multiple: number) => `${SPACING * multiple}px`