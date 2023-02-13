import { motion } from "framer-motion";
import { useState } from "react";

const ALPHABET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./<>?;':\"[]{}\\|`~!@#$%^&*()_+-=";

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

    const textCap = text.toUpperCase().replaceAll(" ", "\u00A0") + " ";

    const GetRandomChar = () =>
        ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const GetRandomString = () =>
        Array.from(textCap)
            .map((char) => (char === "\u00A0" ? "\u00A0" : GetRandomChar()))
            .join("");

    const [displayedText, setDisplayedText] = useState(GetRandomString());
    const [intervalHandle, setIntervalHandle] = useState<number | undefined>(
        undefined
    );

    let i = 0;
    let interval = 0;
    let randomString = "";

    const GlitchSide = () => {
        const index = Math.floor(i / iterations);
        randomString =
            textCap.substring(0, index) +
            GetRandomString().substring(index + 1, textCap.length);
        setDisplayedText(randomString);
        i++;

        if (i >= iterations * textCap.length) {
            clearInterval(interval);
        }
    };

    const GlitchRandom = () => {
        randomString = Array.from(textCap)
            .map((char, index) => {
                if (char === "\u00A0") {
                    return "\u00A0";
                } else if (char == randomString.charAt(index)) {
                    return char;
                } else {
                    return GetRandomChar();
                }
            })
            .join("");

        setDisplayedText(randomString);

        if (textCap == randomString) {
            clearInterval(interval);
        }
    };

    const Shuffle = () => {
        randomString = GetRandomString();
        setDisplayedText(randomString);
        i++;
        if (i >= 2 ** 32) {
            clearInterval(interval);
        }
    };

    const GlitchEntrance = entranceGlitch == "Side" ? GlitchSide : GlitchRandom;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={variantsCon}
            viewport={{ once: false, amount: 0.5 }}
            onAnimationStart={(animation: any) => {
                clearInterval(intervalHandle);
                dispatchEvent(new Event("clearInterval"));

                setDisplayedText(GetRandomString());
                if (animation == "visible") {
                    i = 0;
                    interval = setInterval(GlitchEntrance, iterDelay);
                    setIntervalHandle(interval);
                } else if (animation == "hover" && hoverGlitch) {
                    i = 0;
                    interval = setInterval(Shuffle, iterDelay);
                    setIntervalHandle(interval);
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
    );
};

export default GlitchTextStaggered;
