import React from "react"

export default function useDashOffset(pathRef: React.RefObject<SVGPathElement>) {
    const [offset, setOffset] = React.useState<number | null>(null)

    React.useEffect(() => {
        if (!pathRef || !pathRef.current) {
            console.warn("Invalid path supplied")
            return
        }

        setOffset(pathRef.current.getTotalLength())
    }, [pathRef])

    return offset
}
