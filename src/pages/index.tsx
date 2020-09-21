import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import Container from "components/PageLayout/Container"
import { cssVar } from "utils/index"
import { Heading, Paragraph } from "components/Typography"
import Gradient from "components/Gradient"

const Wrapper = styled.div`
    color: ${cssVar("color-text")};
`

const Header = styled(Heading)`
    text-align: center;
    color: ${cssVar("color-primary")};
`

const SecondaryHeader = styled(Heading)`
    text-align: center;
    color: ${cssVar("color-secondary")}    
`

export default function App() {
    return (
        <Wrapper>
            <SEO title="Home" />
            <Gradient height="20vh"/>
            <Container maxWidth="lg">
                <Header size={1}>I am colorful</Header>
                <SecondaryHeader size={2}>I am a secondary header</SecondaryHeader>
                <Paragraph>Hello dark world!</Paragraph>

                <DarkModeToggle />
            </Container>
        </Wrapper>
    )
}
