import React from "react"
import styled from "styled-components"

import { Z_INDICES } from "@constants"
import { cssVar, spacing } from "@utils"
import { Container } from "components/PageLayout"
import DarkModeToggle from "components/DarkModeToggle"

const StyledHeader = styled.header`
    position: fixed;
    z-index: ${Z_INDICES.header};
    top: 0px;
    left: 0px;
    right: 0px;
    display: grid;
    align-items: center;
    background: linear-gradient(
        to top,
        ${cssVar("color-gradient-1")},
        ${cssVar("color-gradient-2")}
    );

    min-height: 64px;
`

const InnerWrapper = styled(Container)`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    padding-left: ${spacing(1)};
    padding-right: ${spacing(1)};

    display: flex;
    align-items: center;
    justify-items: space-between;
`

type Props = {}

export default function Header(props: Props) {
    return (
        <StyledHeader>
            <InnerWrapper maxWidth="lg">
                <DarkModeToggle />
            </InnerWrapper>
        </StyledHeader>
    )
}
