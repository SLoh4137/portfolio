import React from "react"
import { useSpring, animated, config } from "react-spring"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"
import { Point } from "./index"

type PlantStarProps = {
    startPoint: Point
}

export default function PlantStar(props: PlantStarProps) {
    const { startPoint } = props
    const springProps = useSpring({
        from: {
            transform: "scale(0)",
        },
        to: {
            transform: "scale(1)",
        },
        delay: 2000,
        config: config.molasses,
        immediate: usePrefersReducedMotion(),
    })

    return (
        <svg x={startPoint.x} y={startPoint.y} width={30} height={30}>
            <animated.ellipse
                cx={15}
                cy={15}
                rx={15}
                ry={5}
                style={springProps}
            />
        </svg>
    )
}
