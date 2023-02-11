import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Maximize = ({ children, rel, start, startContainer, end, maxDuration = 0.3, minDuration = 0.25 }:
    {
        children: any,
        rel: React.RefObject<HTMLDivElement>,
        start: React.RefObject<HTMLDivElement>,
        startContainer: React.RefObject<HTMLDivElement>,
        end: any,
        delay?: number,
        maxDuration?: number
        minDuration?: number
    }
) => {
    const GetPositions = () => {
        if (start.current && rel.current && startContainer.current) {
            const rect = start.current.getBoundingClientRect()
            const relRect = rel.current.getBoundingClientRect()
            const boundingBox = startContainer.current.getBoundingClientRect()

            const x = (rect.x + (rect.width / 2)) - relRect.x
            const xClamped = Math.min(Math.max(x, boundingBox.x), boundingBox.x + boundingBox.width)

            const y = relRect.height - (rect.y - relRect.y)

            return { x: +xClamped, y: -y }
        }
        return { x: 0, y: 0 }
    }

    const [startLoc, SetStartLoc] = useState(GetPositions())

    const variants = {
        minimized: {
            scale: 0,
            top: "100%",
            left: 0,
            right: 0,
            bottom: 0,
            y: "calc(-50% + " + startLoc.y + "px)",
            x: "calc(-50% + " + startLoc.x + "px)",
            transition: {
                duration: minDuration,
                type: "tween",
                ease: "easeInOut",
            }
        },
        maximized: {
            scale: 1,
            ...end,
            transition: {
                duration: maxDuration,
                type: "tween",
                ease: "easeInOut",
            }
        },
    }

    useEffect(() => {
        addEventListener("update-start-loc", () => SetStartLoc(GetPositions()))
    }, [])

    return (
        <motion.div className="flex w-fit h-fit absolute"
            variants={variants}
            animate="maximized"
            initial="minimized"
            exit="minimized"
        >
            {children}
        </motion.div>
    )
}

export default Maximize