import { motion } from "framer-motion";
import Cursor from "./Cursor";

const TerminalText = ({
    text,
    startDelay = 0,
    textDelay = 0.05,
}: {
    text: string;
    startDelay?: number;
    textDelay?: number;
}) => {
    const displayedLine = text.split("\n");

    const variantCon = {
        visible: {
            opacity: 1,
            transition: {
                delay: startDelay,
                when: "beforeChildren",
                staggerChildren: textDelay,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const Appear = {
        visible: {
            display: "inline-block",
        },
        hidden: {
            display: "none",
        },
    };

    return (
        <>
            <motion.div
                className="inline"
                variants={variantCon}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {displayedLine.map((line, lIndex) => {
                    return (
                        <div className="inline" key={`${line.length} ${lIndex}`}>
                            {line.split(" ").map((word, wIndex) => {
                                return (
                                    <div className="inline-block" key={`${lIndex} ${wIndex}`}>
                                        <motion.span key={`${lIndex} ${wIndex} ${word}`} variants={Appear}>
                                            {word}
                                        </motion.span>
                                        {wIndex != line.split(" ").length - 1 &&
                                            <motion.span key={`${lIndex} ${word.length} space`} variants={Appear}>
                                                {"\u00A0"}
                                            </motion.span>
                                        }
                                    </div>
                                )
                            })
                            }

                            {(lIndex != displayedLine.length - 1) &&
                                <motion.br key={`${lIndex} \n`} variants={Appear}></motion.br>
                            }
                        </div>
                    )
                })}

            </motion.div>
            <Cursor />
        </>
    );
};

export default TerminalText;
