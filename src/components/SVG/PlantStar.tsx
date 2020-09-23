import React from "react"
import { useSpring, animated, config } from "react-spring"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"
import { Point } from "./index"
import { random } from "utils/"

type PlantStarProps = {
    startPoint: Point
}

const WIDTH = 30
const HEIGHT = 30

const PATH_LEAF_LEFT =
    "M30 30C11.6 27.6 3 9.66667 1 1C22.2 8.2 29.1667 23.3333 30 30Z"

const PATH_LEAF_RIGHT = 
    "M1 29.9999C3.4 11.5999 21.3333 2.99988 30 0.999878C22.8 22.1999 7.66667 29.1665 1 29.9999Z"

export default function PlantStar(props: PlantStarProps) {
    const { startPoint } = props
    const direction = Math.random() < 0.5 ? 1 : -1
    const isLeft = direction == 1
    const springProps = useSpring({
        from: {
            transform: isLeft ? `translate(${WIDTH}px, 0px)` : `translate(${-WIDTH}px, 0px)`,
        },
        to: {
            transform: `translate(0px, 0px)`,
        },
        delay: 1000,
        config: config.molasses,
        immediate: usePrefersReducedMotion(),
    })

    return (
        <g>
            <svg
                x={isLeft ? startPoint.x - WIDTH : startPoint.x}
                y={startPoint.y - HEIGHT}
                width={WIDTH}
                height={HEIGHT}
            >
                <animated.path
                    d={isLeft ? PATH_LEAF_LEFT : PATH_LEAF_RIGHT}
                    style={springProps}
                />
            </svg>
        </g>
    )
}
