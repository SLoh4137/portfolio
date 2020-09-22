import React from "react"
import { PageProps, graphql } from "gatsby"
import { Image } from "components/Image"

import { Container } from "components/PageLayout"
import { Heading } from "components/Typography"

import { cssVar } from "utils/index"

type NotFoundPageProps = PageProps & {
    data: GatsbyTypes.NotFoundPageQuery
}

export default function NotFoundPage(props: NotFoundPageProps) {
    const { data } = props
    return (
        <>
            <Heading size={1} textAlign="center">
                Oops sorry that page doesn't exist!
            </Heading>
            <Heading
                size={2}
                textAlign="center"
                color={cssVar("color-primary")}
            >
                Here's a funny sign I found while biking instead
            </Heading>
            <Container maxWidth="md">
                <Image
                    image={data.file}
                    alt="Not found image. Sign saying 'Your GPS is wrong. Turn around now'"
                />
            </Container>
        </>
    )
}

export const query = graphql`
    query NotFoundPage {
        file(relativePath: { eq: "404.JPG" }) {
            ...Image
        }
    }
`
