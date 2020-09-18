import React from "react"

import { ThemeContext } from "components/App/ThemeContext"

export default function DarkModeToggle() {
    const { colorMode, setColorMode } = React.useContext(ThemeContext)

    if (!colorMode || !setColorMode) return null

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={colorMode === "dark"}
                    onChange={event => {
                        setColorMode(event.target.checked ? "dark" : "light")
                    }}
                />{" "}
                Dark
            </label>
        </>
    )
}
