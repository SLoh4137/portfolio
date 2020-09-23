import React from "react"
import styled from "styled-components"
import { animated, config } from "react-spring"
import { Spring } from "react-spring/renderprops"

import { cssVar, random } from "utils/index"
import PlantStar from "./PlantStar"
import { Point } from "./index"

import useDashOffset from "hooks/useDashOffset"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const StyledSvg = styled.svg`
    height: 100%;
    width: 100%;
`

const WIDTH = 100
const HEIGHT = 1000

const WIDTH_EPSILON = 30
const HEIGHT_EPSILON = 20

type ConnectorProps = {
    from: Point
    to: Point
}
const Connector = ({ from, to }: ConnectorProps) => (
    <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
)

const connectToPoint = (from: Point, to: Point) => {
    const midPoint = { x: (to.x + from.x) / 2, y: (to.y + from.y) / 2}
    const control = {
        x: midPoint.x - random(-WIDTH_EPSILON, WIDTH_EPSILON),
        y: midPoint.y - random(-HEIGHT_EPSILON, HEIGHT_EPSILON),
    }
    // return `Q ${control.x}, ${control.y} ${to.x},${to.y}`
    return `L ${to.x},${to.y}`
}

type GrowingPlantProps = {}

export default function GrowingPlant(props: GrowingPlantProps) {
    const prefersReducedMotion = usePrefersReducedMotion()

    const startPoints: Point[] = []
    const min = Math.floor((WIDTH * 1) / 4)
    const max = Math.floor((WIDTH * 3) / 4)
    for (let i = HEIGHT; i > 0; i = i - HEIGHT / 10) {
        startPoints.push({
            x: random(min, max),
            y: i - 30,
        })
    }

    const pathRef = React.createRef<SVGPathElement>()
    const dashOffset = useDashOffset(pathRef)
    const initialPoint = {
        x: 0,
        y: HEIGHT,
    }
    //const lines = startPoints.map(point => connectToPoint(point)).join(" ")
    const lines = startPoints.map((point, index) => {
        const from = index > 0 ? startPoints[index - 1] : initialPoint
        return connectToPoint(from, point)
    })
    const pathInstructions = `M ${initialPoint.x}, ${
        initialPoint.y
    } ${lines.join(" ")}`

    return (
        <StyledSvg
            width={WIDTH}
            height={HEIGHT}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            stroke={cssVar("color-primary")}
            fill={"none"}
            preserveAspectRatio="none"
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
