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
};

const GlitchTextStaggered = ({
    text,
    iterations,
    iterDelay = 30,
    staggerTime = 0.05,
    variants = variantsDefault,
    entranceGlitch = "Side",
    hoverGlitch = true,
}: {
    text: string;
    iterations: number;
    iterDelay?: number;
    staggerTime?: number;
    variants?: typeof variantsDefault;
    entranceGlitch?: "Side" | "Random";
    hoverGlitch?: boolean;
}) => {
    const variantsCon = {
        visible: {
            scale: 1.0,
            transition: {
                staggerChildren: staggerTime,
            },
        },
        hidden: {
            scale: 1.0,
        },
        hover: {
            scale: 1.1,
        },
    };

    const textCap = text.replaceAll(" ", "\u00A0") + " ";

    const [glitchHandler, _] = useState(new GlitchHandler(iterations, iterDelay, textCap));

    return (
        <GlitchedText handler={glitchHandler} variants={variants} variantsCon={variantsCon} hover={hoverGlitch} entranceGlitch={entranceGlitch} />
    );
};

const GlitchedText = ({ handler, variants, variantsCon, hover, entranceGlitch }: { handler: GlitchHandler, variants: typeof variantsDefault, variantsCon: any, hover: boolean, entranceGlitch: string }) => {
    const [displayedText, setDisplayedText] = useState<string>(handler.GetRandomString());
    handler.SetDisplayedTextSetter(setDisplayedText);
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover={hover ? "hover" : ""}
            variants={variantsCon}
            viewport={{ once: false, amount: 0.5 }}
            onAnimationStart={(animation: any) => {
                if (animation === "visible") {
                    handler.start(entranceGlitch);
                } else if (animation === "hover" && hover) {
                    handler.start("Shuffle");
                }
            }}
        >
            {displayedText.split("").map((char, index) => {
                return (
                    <motion.span
                        className="inline-block w-fit"
                        key={index}
                        variants={variants}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.div>
    )
}

export default GlitchTextStaggered;
