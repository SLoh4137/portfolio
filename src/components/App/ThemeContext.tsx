/**
 * Taken from Josh W Comeau's Quest for a Perfect Dark Mode
 * https://github.com/joshwcomeau/dark-mode-minimal/blob/master/src/components/ThemeContext.js
 */

import React from "react"
import {
    COLORS,
    COLOR_MODE_KEY,
    INITIAL_COLOR_MODE_CSS_PROP,
    ColorModes,
} from "@constants"

export interface ThemeContextValue {
    colorMode: ColorModes
    setColorMode: (newValue: ColorModes) => void
}

export const ThemeContext = React.createContext<Partial<ThemeContextValue>>({})

type ThemeProviderProps = {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [colorMode, rawSetColorMode] = React.useState<ColorModes>("light")

    React.useEffect(() => {
        const root = window.document.documentElement
        const initialColorValue = root.style.getPropertyValue(
            INITIAL_COLOR_MODE_CSS_PROP
        )
        rawSetColorMode(initialColorValue as ColorModes)
    }, [])

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue: ColorModes) {
            const root = window.document.documentElement

            localStorage.setItem(COLOR_MODE_KEY, newValue)

            Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                root.style.setProperty(`--${name}`, colorByTheme[newValue])
            })

            rawSetColorMode(newValue)
        }

        return {
            colorMode,
            setColorMode,
        }
    }, [colorMode, rawSetColorMode])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
