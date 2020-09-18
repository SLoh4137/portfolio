// Inspired by Josh W Comeau's Quest for the Perfect Dark Mode
// https://github.com/joshwcomeau/dark-mode-minimal/blob/master/src/constants.js
export const COLORS = {
    colorText: {
        light: "hsl(0deg, 0%, 10%)", // white
        dark: "hsl(0deg, 0%, 100%)", // near-black
    },
    colorBackground: {
        light: "hsl(0deg, 0%, 100%)", // white
        dark: "hsl(250deg, 70%, 7%)", // navy navy blue
    },
    colorPrimary: {
        light: "hsl(340deg, 100%, 40%)", // Pinkish-red
        dark: "hsl(50deg, 100%, 50%)", // Yellow
    },
    colorSecondary: {
        light: "hsl(250deg, 100%, 50%)", // Purplish-blue
        dark: "hsl(190deg, 100%, 40%)", // Cyan
    },
    // Grays, scaling from least-noticeable to most-noticeable
    colorGray300: {
        light: "hsl(0deg, 0%, 70%)",
        dark: "hsl(0deg, 0%, 30%)",
    },
    colorGray500: {
        light: "hsl(0deg, 0%, 50%)",
        dark: "hsl(0deg, 0%, 50%)",
    },
    colorGray700: {
        light: "hsl(0deg, 0%, 30%)",
        dark: "hsl(0deg, 0%, 70%)",
    },
}

export type ColorModes = "light" | "dark"

export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"

export const BREAKPOINT_SIZES = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

const maxWidth = (breakpoint: number) => `(max-width: ${breakpoint}px)`
const minWidth = (breakpoint: number) => `(min-width: ${breakpoint + 1}px)`

export const BREAKPOINTS = {
    xsMax: maxWidth(BREAKPOINT_SIZES.xs),
    smMax: maxWidth(BREAKPOINT_SIZES.sm),
    mdMax: maxWidth(BREAKPOINT_SIZES.md),
    lgMax: maxWidth(BREAKPOINT_SIZES.lg),
    xlMax: maxWidth(BREAKPOINT_SIZES.xl),

    xsMin: minWidth(BREAKPOINT_SIZES.xs),
    smMin: minWidth(BREAKPOINT_SIZES.sm),
    mdMin: minWidth(BREAKPOINT_SIZES.md),
    lgMin: minWidth(BREAKPOINT_SIZES.lg),
    xlMin: minWidth(BREAKPOINT_SIZES.xl),
    desktopMin: minWidth(BREAKPOINT_SIZES.md),
}

export const SPACING = 8

export type CssVarsKeys = keyof typeof COLORS | "spacing"