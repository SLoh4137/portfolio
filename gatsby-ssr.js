/**
 * Taken from Josh W Comeau's Quest for a Perfect Dark Mode
 * https://github.com/joshwcomeau/dark-mode-minimal/blob/master/gatsby-ssr.js
 */
import React from "react"
import { minify } from "terser"

import {
    COLORS,
    COLOR_MODE_KEY,
    INITIAL_COLOR_MODE_CSS_PROP,
} from "constants/index"
import App from "components/App"

// Emojis will be replaced with actual values after it is converted into a string
function setColorsByTheme() {
    // prettier-ignore
    const colors = '🥰'
    const colorModeKey = "🐌"
    const colorModeCssProp = "🚴"

    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const prefersDark = mql.matches
    const persistedPreference = localStorage.getItem(colorModeKey)

    let colorMode = "light"

    const hasUsedToggle = typeof persistedPreference === "string"

    if (hasUsedToggle) {
        colorMode = persistedPreference
    } else {
        colorMode = prefersDark ? "dark" : "light"
    }

    let root = document.documentElement
    root.style.setProperty(colorModeCssProp, colorMode)

    Object.entries(colors).forEach(([name, colorByTheme]) => {
        root.style.setProperty(`--${name}`, colorByTheme[colorMode])
    })
}

const MagicScriptTag = () => {
    const boundFn = String(setColorsByTheme)
        .replace("'🥰'", JSON.stringify(COLORS))
        .replace("🐌", COLOR_MODE_KEY)
        .replace("🚴", INITIAL_COLOR_MODE_CSS_PROP)

    const calledFunction = `(${boundFn})()`

    return <script dangerouslySetInnerHTML={{ __html: minify(calledFunction).code }} />
}

/**
 * If the user doesn't have Javascript enabled, no color mode will be set for them!
 * So we default to using the light color mode
 */
const FallbackStyles = () => {
    const cssVariableString = Object.entries(COLORS).reduce(
        (acc, [name, colorByTheme]) =>
            `${acc}\n--${name}: ${colorByTheme.light}`,
        ""
    )

    const wrappedInSelector = `html { ${cssVariableString} }`
    return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
    setHeadComponents(<FallbackStyles key={"fallback"}/>)
    setPreBodyComponents(<MagicScriptTag key={"magicscript"}/>)
}

export const wrapPageElement = ({ element }) => {
    return <App>{element}</App>
}
