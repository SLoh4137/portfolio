import React from "react"
import styled from "styled-components"
import { animated, config } from "react-spring"
import { Spring } from "react-spring/renderprops"

import { cssVar } from "utils/index"
import PlantStar from "./PlantStar"
import { Point } from "./index"

import useDashOffset from "hooks/useDashOffset"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const StyledSvg = styled.svg`
    height: 100%;
    width: 100%;
`

type ConnectorProps = {
    from: Point
    to: Point
}
const Connector = ({ from, to }: ConnectorProps) => (
    <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
)

const connectToPoint = (to: Point) => `L ${to.x},${to.y}`

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

    const pathRef = React.createRef<SVGPathElement>()
    const dashOffset = useDashOffset(pathRef)
    const lines = startPoints.map(point => connectToPoint(point)).join(" ")
    const pathInstructions = `M 0, ${height} ${lines}`
    const prefersReducedMotion = usePrefersReducedMotion()

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

            {dashOffset ? (
                <Spring
                    from={{ x: dashOffset }}
                    to={{ x: 0 }}
                    config={config.molasses}
                    immediate={prefersReducedMotion}
                >
                    {props => (
                        <animated.path
                            d={pathInstructions}
                            strokeDashoffset={props.x}
                            strokeDasharray={dashOffset}
                            ref={pathRef}
                            // style={props}
                        />
                    )}
                </Spring>
            ) : (
                <path d={pathInstructions} stroke={"none"} ref={pathRef} />
            )}
        </StyledSvg>
    )
}
