import React from "react"

import { ThemeProvider } from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"

type Props = {
    children: React.ReactNode
}

export default ({ children }: Props) => {
    return (
        <ThemeProvider>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}
