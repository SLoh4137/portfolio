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

export type CssVarsKeys = keyof typeof COLORS
export type ColorModes = "light" | "dark"

export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
