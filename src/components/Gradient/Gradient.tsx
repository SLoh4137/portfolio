import React from "react"
import styled from "styled-components"
import { cssVar } from "@utils"

interface GradientProps {
    height: string,
}

const Gradient = styled.div<GradientProps>`
    width: 100%;
    height: ${props => props.height};
    background: linear-gradient(to left, ${cssVar("color-gradient-1")}, ${cssVar("color-gradient-2")});
`

export default Gradient