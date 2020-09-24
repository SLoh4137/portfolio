import { createGlobalStyle } from "styled-components"
import { cssVar } from "@utils"
import { SPACING } from "@constants"

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html {
        --spacing: ${SPACING}px;
    }

    body {
        background: ${cssVar("color-background")};
        color: ${cssVar("color-text")};
        margin: 0;
        padding: 0;
    }

    a {
        color: ${cssVar("color-secondary")};
    }
`

export default GlobalStyles