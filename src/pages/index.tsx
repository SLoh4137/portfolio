import React from "react"
import styled from "styled-components"

import DarkModeToggle from "components/DarkModeToggle/DarkModeToggle"
import SEO from "components/SEO"
import Container from "components/PageLayout/Container"
import { cssVar, spacing } from "utils/index"
import { Heading, Paragraph } from "components/Typography"

const Wrapper = styled.div`
    color: ${cssVar("color-text")};
    padding: ${spacing(2)};
`

const SecondaryHeader = styled(Heading)`
    text-align: center;
    color: ${cssVar("color-secondary")};
`

export default function Index() {
    return (
        <Wrapper>
            <SEO title="Home" />
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
    )
}
