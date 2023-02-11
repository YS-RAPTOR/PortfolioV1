import { motion } from "framer-motion";
import Cursor from "./Cursor";

const TerminalText = ({ text, startDelay = 0, textDelay = 0.05 }: { text: string, startDelay?: number, textDelay?: number }) => {

    const displayedText = text.replaceAll(" ", "\u00A0")

    const variantCon = {
        visible: {
            opacity: 1,
            transition: {
                delay: startDelay,
                when: "beforeChildren",
                staggerChildren: textDelay,
            }
        },
        hidden: {
            opacity: 0,
        }
    }

    const Appear = {
        visible: {
            display: "inline-block",
        },
        hidden: {
            display: "none",
        }
    }

    return (
        <>
            <motion.div
                className="inline"
                variants={variantCon}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {displayedText.split("").map((char, index) => {
                    return (
                        char === "\n"
                            ? <motion.br key={index} variants={Appear}></motion.br>
                            : <motion.span key={index} variants={Appear}>
                                {char}
                            </motion.span>
                    )
                })
                }
            </motion.div>
            <Cursor />
        </>
    )
}


export default TerminalText;