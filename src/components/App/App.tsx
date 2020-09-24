import React from "react"

import { ThemeProvider } from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"
import { Header, Footer } from "components/Layout"

type Props = {
    children: React.ReactNode
}

export default ({ children }: Props) => {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
