import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "components/SEO"
import { Container } from "components/PageLayout"
import { cssVar, spacing } from "@utils"
import { Heading, Paragraph } from "components/Typography"
import { GrowingPlant } from "components/SVG"
import { Image } from "components/Image"

const Wrapper = styled(Container)`
    color: ${cssVar("color-text")};
    padding: ${spacing(2)};
    z-index: 1;
`

const SVGBackground = styled.div`
    position: absolute;
    width: 5vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
`

const MainImage = styled(Image)``

const SVGLeft = styled(SVGBackground)`
    left: 0;
`

const SVGRight = styled(SVGBackground)`
    transform: scaleX(-1);
    right: 0;
`

type Props = {
    data: GatsbyTypes.IndexPageQuery
}

export default function Index(props: Props) {
    const { data } = props
    return (
        <>
            <SEO title="Home" />
            <SVGLeft>
                <GrowingPlant />
            </SVGLeft>
            <SVGRight>
                <GrowingPlant />
            </SVGRight>
            <Wrapper maxWidth="lg">
                <Heading
                    size={2}
                    color={cssVar("color-primary")}
                    textAlign="center"
                >
                    Hello! I'm Stephan
                </Heading>
                <Container maxWidth="sm">
                    <MainImage
                        image={data.me}
                        alt="Picture of me eating gelato"
                    />
                </Container>
                <Heading size={2}>I am a secondary header</Heading>
                <Paragraph>Hello dark world!</Paragraph>
                Other text
            </Wrapper>
        </>
    )
}

export const query = graphql`
    query IndexPage {
        me: file(relativePath: { eq: "stephan_loh.jpg" }) {
            ...Image
        }
    }
`
