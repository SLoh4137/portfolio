import React from "react"
import { createGlobalStyle } from "styled-components"
import { cssVar } from "utils/index"

const GlobalStyles = createGlobalStyle`
    body {
        background: ${cssVar("colorBackground")};
        color: ${cssVar("colorText")};
    }

    a {
        color: ${cssVar("colorSecondary")};
    }
`

export default GlobalStyles