import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import { cssVar } from "utils/index"

const Wrapper = styled.div`
    padding: 20px;
    color: ${cssVar("colorText")};
`

const Header = styled.h1`
    font-size: 64px;
    color: ${cssVar("colorPrimary")};
`

export default function App() {
    return (
        <Wrapper>
            <SEO title="Home" />
            <Header>I am colorful</Header>
            Hello dark world!
            <DarkModeToggle />
        </Wrapper>
    )
}
