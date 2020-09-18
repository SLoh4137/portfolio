import React from "react"
import styled from "styled-components"

import { cssVar } from "utils/index"

const Base = styled.div`
    color: ${cssVar("colorText")};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    b {
        color: ${cssVar("colorPrimary")};
    }
`

const H1 = styled(Base)`
    font-size: 6rem;
`

const H2 = styled(Base)`
    font-size: 3.75rem;
`

const H3 = styled(Base)`
    font-size: 3rem;   
`

const H4 = styled(Base)`
    font-size: 2.215rem;
`

const H5 = styled(Base)`
    font-size: 1.5rem;
`

const H6 = styled(Base)`
    font-size: 1.25rem;
    font-weight: 400;
`

type AvailableHeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Headings: [typeof Base, AvailableHeadings][] = [
    [H1, "h1"], 
    [H2, "h2"], 
    [H3, "h3"], 
    [H4, "h4"], 
    [H5, "h5"], 
    [H6, "h6"]
]

interface HeadingProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6
}

function Heading(props: React.PropsWithChildren<HeadingProps>, ref: React.Ref<HTMLDivElement>) {
    const { size = 1, children, ...rest} = props
    const selectedHeading = Headings[size - 1]
    const [Element, renderedComponent] = selectedHeading
    return (
        <Element as={renderedComponent} {...rest} ref={ref}>
            {children}
        </Element>
    )
}

export default React.forwardRef<HTMLDivElement, React.PropsWithChildren<HeadingProps>>(Heading)