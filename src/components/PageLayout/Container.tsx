import styled, {css} from "styled-components"
import { BREAKPOINT_SIZES, BREAKPOINTS } from "constants/index"

interface ContainerProps {
    maxWidth?: keyof typeof BREAKPOINT_SIZES
}

const maxWidthStyles = {
    xs: css`@media ${BREAKPOINTS.xsMin} {
        max-width: ${BREAKPOINT_SIZES.xs}px;
    }`,
    sm: css`@media ${BREAKPOINTS.smMin} {
        max-width: ${BREAKPOINT_SIZES.sm}px;
    }`,
    md: css`@media ${BREAKPOINTS.mdMin} {
        max-width: ${BREAKPOINT_SIZES.md}px;
    }`,
    lg: css`@media ${BREAKPOINTS.lgMin} {
        max-width: ${BREAKPOINT_SIZES.lg}px;
    }`,
    xl: css`@media ${BREAKPOINTS.xlMin} {
        max-width: ${BREAKPOINT_SIZES.xl}px;
    }`,
}

const Container = styled.div<ContainerProps>`
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    ${props => props.maxWidth && maxWidthStyles[props.maxWidth]} 
`

export default Container
