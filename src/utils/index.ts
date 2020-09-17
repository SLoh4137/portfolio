import { CssVarsKeys } from "constants/index"

export const cssVar = (str: CssVarsKeys) => `var(--${str})`

export const breakpointQuery = (breakpoint: string) => `@media(min-width: ${breakpoint})`