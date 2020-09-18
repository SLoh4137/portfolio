import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import Container from "components/PageLayout/Container"
import { cssVar } from "utils/index"
import { Heading, Paragraph } from "components/Typography"

const Wrapper = styled.div`
    padding: 20px;
    color: ${cssVar("colorText")};
`

const Header = styled(Heading)`
    text-align: center;
    color: ${cssVar("colorPrimary")};
`

export default function App() {
    return (
        <Wrapper>
            <SEO title="Home" />
            <Container maxWidth="lg">
                <Header size={1}>I am colorful</Header>
                <Paragraph>Hello dark world!</Paragraph>

                <DarkModeToggle />
            </Container>
        </Wrapper>
    )
}
