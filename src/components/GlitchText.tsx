import { motion } from "framer-motion";
import { useState } from "react";
import GlitchHandler from "../utils/GlitchHandler";

const variantsDefault = {
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
    },
    hidden: {
        y: 10,
        opacity: 0,
        scale: 1,
    },
    hover: {
        scale: 1.1,
    },
};


const GlitchText = ({
    text,
    iterations,
    iterDelay = 30,
    variants = variantsDefault,
    entranceGlitch = "Side",
    hoverGlitch = true,
    direction = "right",
}: {
    text: string;
    iterations: number;
    iterDelay?: number;
    variants?: any;
    entranceGlitch?: "Side" | "Random";
    hoverGlitch?: boolean;
    direction?: "right" | "left";
}) => {
    const space = direction == "right" && entranceGlitch == "Side" ? "‎ " : "";
    const textCap = text + space;

    const [glitchHandler, _] = useState(new GlitchHandler(iterations, iterDelay, textCap, direction, " "));

    return (
        <GlitchedText handler={glitchHandler} variants={variants} hover={hoverGlitch} entranceGlitch={entranceGlitch} />
    );
};

const GlitchedText = ({ handler, variants, hover, entranceGlitch }: { handler: GlitchHandler, variants: typeof variantsDefault, hover: boolean, entranceGlitch: string }) => {
    const [displayedText, setDisplayedText] = useState<string>(handler.GetRandomString());
    handler.SetDisplayedTextSetter(setDisplayedText);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={hover ? "hover" : ""}
            variants={variants}
            viewport={{ once: false, amount: 0.5 }}
            onAnimationStart={(animation: any) => {
                if (animation === "visible") {
                    handler.start(entranceGlitch);
                } else if (animation === "hover" && hover) {
                    handler.start("Shuffle");
                }
            }}
        >
            {displayedText}
        </motion.div>
    );
}

export default GlitchText;
