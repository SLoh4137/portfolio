import React from "react"
import styled from "styled-components"

import { BREAKPOINTS } from "@constants"
import { cssVar } from "@utils"
import { TextAlignType } from "./index"

interface HeadingProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6
    textAlign?: TextAlignType
    color?: string
}

const Base = styled.div<HeadingProps>`
    color: ${props => props.color};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-align: ${props => props.textAlign};

    b {
        color: ${cssVar("color-primary")};
    }
`

const H1 = styled(Base)`
    font-size: 6rem;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 5.3rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 4.7rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 3.5rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 2.5rem;
    }
`

const H2 = styled(Base)`
    font-size: 3.75rem;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 3.33rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 2.91rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 2.375rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 2.25rem;
    }
`

const H3 = styled(Base)`
    font-size: 3rem;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 2.78rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 2.5rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 2rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 1.75em;
    }
`

const H4 = styled(Base)`
    font-size: 2.215rem;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 2rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 1.8rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 1.5rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 1.25rem;
    }
`

const H5 = styled(Base)`
    font-size: 1.5rem;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 1.5rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 1.3rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 1.25rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 1.18rem;
    }
`

const H6 = styled(Base)`
    font-size: 1.25rem;
    font-weight: 400;

    @media ${BREAKPOINTS.xlMax} {
        font-size: 1.25rem;
    }

    @media ${BREAKPOINTS.lgMax} {
        font-size: 1.20rem;
    }

    @media ${BREAKPOINTS.mdMax} {
        font-size: 1.125rem;
    }

    @media ${BREAKPOINTS.smMax} {
        font-size: 1.1rem;
    }
`

type AvailableHeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Headings: [typeof Base, AvailableHeadings][] = [
    [H1, "h1"],
    [H2, "h2"],
    [H3, "h3"],
    [H4, "h4"],
    [H5, "h5"],
    [H6, "h6"],
]

function Heading(
    props: React.PropsWithChildren<HeadingProps>,
    ref: React.Ref<HTMLDivElement>
) {
    const {
        size = 1,
        color = cssVar("color-text"),
        textAlign = "inherit",
        children,
        ...rest
    } = props
    const selectedHeading = Headings[size - 1]
    const [Element, renderedComponent] = selectedHeading
    return (
        <Element
            as={renderedComponent}
            color={color}
            textAlign={textAlign}
            {...rest}
            ref={ref}
        >
            {children}
        </Element>
    )
}

export default React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<HeadingProps>
>(Heading)
