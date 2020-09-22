import React from "react"
import styled from "styled-components"
import { cssVar } from "utils/index"

import PlantStar from "./PlantStar"
import { Point } from "./index"

const StyledSvg = styled.svg`
    height: 100%;
    width: 100%;
`

type ConnectorProps = {
    from: Point,
    to: Point,
}
const Connector = ({from, to}: ConnectorProps) => (
    <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
    />
)

type GrowingPlantProps = {}

export default function GrowingPlant(props: GrowingPlantProps) {
    const width = 50
    const height = 600
    const startPoints: Point[] = []
    for (let i = height; i > 0; i = i - height / 6) {
        startPoints.push({
            x: width / 2,
            y: i - 30,
        })
    }

    const lines = startPoints.map((point, index) => {
        const from = index > 0 ? startPoints[index - 1] : {x: 0, y: height}

        return <Connector from={from} to={point} />
    })
    return (
        <StyledSvg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            stroke={cssVar("color-primary")}
            fill={"none"}
        >
            {startPoints.map(point => (
                <PlantStar startPoint={point} key={`${point.x}-${point.y}`} />
            ))}
            {lines}
        </StyledSvg>
    )
}
