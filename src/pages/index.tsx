import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import Container from "components/PageLayout/Container"
import { cssVar } from "utils/index"
import { Heading, Paragraph } from "components/Typography"

const Wrapper = styled.div`
    color: ${cssVar("color-text")};
`

const GradientBanner = styled.div`
    width: 100%;
    height: 20vh;
    background: radial-gradient(ellipse at top, ${cssVar("color-gradient-1")}, transparent),
        radial-gradient(ellipse at bottom,  ${cssVar("color-gradient-2")}, transparent);
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
            <GradientBanner />
            <Container maxWidth="lg">
                <Header size={1}>I am colorful</Header>
                <SecondaryHeader size={2}>I am a secondary header</SecondaryHeader>
                <Paragraph>Hello dark world!</Paragraph>

                <DarkModeToggle />
            </Container>
        </Wrapper>
    )
}
