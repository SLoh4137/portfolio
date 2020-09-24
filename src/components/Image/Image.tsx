import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img, { GatsbyImageOptionalProps } from "gatsby-image"
import { BORDER_RADIUS } from "@constants"

const StyledImg = styled(Img)`
    border-radius: ${BORDER_RADIUS}px;
`

type ImageProps = GatsbyImageOptionalProps & {
    image: GatsbyTypes.Maybe<GatsbyTypes.ImageFragment>,
    alt: string,
}

export default function Image(props: ImageProps) {
    const { image, alt, ...rest } = props

    if (!image || !image.childImageSharp) throw new Error(`${alt} image does not exist`)

    return (
        // @ts-ignore Not sure why it's not allowing fluid here
        <StyledImg fluid={image.childImageSharp.fluid} alt={alt} {...rest} />
    )
}

export const imgFragment = graphql`
    fragment Image on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
