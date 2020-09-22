import React from "react"

import { Point } from "./index"

type PlantStarProps = {
    startPoint: Point
}

export default function PlantStar(props: PlantStarProps) {
    const { startPoint } = props
    return (
        <svg x={startPoint.x} y={startPoint.y} width={30} height={30}>
            <ellipse cx={15} cy={15} rx={15} ry={5} />
        </svg>
    )
}
