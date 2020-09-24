import { CssVarsKeys, SPACING } from "@constants"

export const cssVar = (str: CssVarsKeys) => `var(--${str})`

export const spacing = (multiple: number) => `${SPACING * multiple}px`

export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min
