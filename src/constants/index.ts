// Inspired by Josh W Comeau's Quest for the Perfect Dark Mode
// https://github.com/joshwcomeau/dark-mode-minimal/blob/master/src/constants.js
export const COLORS = {
    "color-text": {
        light: "hsl(0deg, 0%, 10%)", // white
        dark: "hsl(0deg, 0%, 100%)", // near-black
    },
    "color-background": {
        light: "hsl(0deg, 0%, 100%)", // white
        //dark: "hsl(250deg, 70%, 7%)", // navy navy blue
        dark: "hsl(210deg, 30%, 8%)",
    },
    "color-primary": {
        light: "hsl(100deg, 37%, 44%)", // Green-ish brown
        // dark: "hsl(36deg, 100%, 50%)", // Orange-ish yellow
        dark: "hsl(100deg, 37%, 44%)",
    },
    "color-secondary": {
        light: "hsl(186deg, 39%, 50%)", // Purplish-blue
        // dark: "hsl(190deg, 100%, 40%)", // Cyan
        dark: "hsl(36deg, 100%, 50%)",
    },
    "color-gradient-1": {
        light: "#619846", // Green-ish brown
        dark: "hsl(210deg, 30%, 8%)",
    },
    "color-gradient-2": {
        light: "rgb(134,171,96)", // Light green
        dark: "hsl(36deg, 100%, 50%)",
    },
    // Grays, scaling from least-noticeable to most-noticeable
    "color-gray-300": {
        light: "hsl(0deg, 0%, 70%)",
        dark: "hsl(0deg, 0%, 30%)",
    },
    "color-gray-500": {
        light: "hsl(0deg, 0%, 50%)",
        dark: "hsl(0deg, 0%, 50%)",
    },
    "color-gray-700": {
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