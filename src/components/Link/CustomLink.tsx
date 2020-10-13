import React from "react"
import styled from "styled-components"
import { Link, GatsbyLinkProps } from "gatsby"

type LinkState = {}

type Props = GatsbyLinkProps<LinkState> & {
}
function CustomLink(props: Props, ref: Props["ref"]) {
    const { children, ...rest} = props 
    return (
        // @ts-ignore I can't find the right type for this ref oops
        <Link {...rest} ref={ref}>
            {children}
        </Link>
    )
}

export default React.forwardRef(CustomLink)