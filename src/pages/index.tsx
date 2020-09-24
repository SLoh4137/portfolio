import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import Container from "components/PageLayout/Container"
import { cssVar, spacing } from "@utils"
import { Heading, Paragraph } from "components/Typography"
import { GrowingPlant } from "components/SVG"

const Wrapper = styled.div`
    color: ${cssVar("color-text")};
    padding: ${spacing(2)};
    z-index: 1;
`

const SecondaryHeader = styled(Heading)`
    text-align: center;
    color: ${cssVar("color-secondary")};
`

const SVGBackground = styled.div`
    position: absolute;
    width: 10vh;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
`

const SVGLeft = styled(SVGBackground)`
    left: 0;
`

const SVGRight = styled(SVGBackground)`
    transform: scaleX(-1);
    right: 0;
`

export default function Index() {
    return (
        <>
            <SEO title="Home" />
            <SVGLeft>
                <GrowingPlant />
            </SVGLeft>
            <SVGRight>
                <GrowingPlant />
            </SVGRight>
            <Wrapper>
                <Container maxWidth="lg">
                    <Heading
                        size={1}
                        color={cssVar("color-primary")}
                        textAlign="center"
                    >
                        I am colorful
                    </Heading>
                    <SecondaryHeader size={2}>
                        I am a secondary header
                    </SecondaryHeader>
                    <Paragraph>Hello dark world!</Paragraph>

                    <DarkModeToggle />
                </Container>
            </Wrapper>
        </>
    )
}
