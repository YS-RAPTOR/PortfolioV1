import { motion } from "framer-motion";

const variantBlink = {
    blink1: {
        opacity: [0, 0, 1, 1],
        transition: {
            times: [0, 0.5, 0.5, 1],
            repeat: Infinity,
            duration: 1,
        }
    },
    blink2: {
        opacity: [1, 1, 0, 0, 1],
        transition: {
            times: [0, 0.5999, 0.6, 0.9999, 1],
            repeat: Infinity,
            duration: 1,
        }
    }
}

const Cursor = ({ horizontal = true }: { horizontal?: boolean }) => {
    return (
        <motion.div variants={variantBlink} animate="blink1" className="text-lime-300 inline-block ml-1">
            {horizontal ? "_" : "|"}
        </motion.div>

    )
}

export default Cursor;