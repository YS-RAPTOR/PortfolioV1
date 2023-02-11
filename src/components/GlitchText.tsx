import { motion } from "framer-motion";
import { useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./<>?;':\"[]{}\\|`~!@#$%^&*()_+-=";

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
    }
}



const GlitchText = (
    { text, iterations, iterDelay = 30, variants = variantsDefault, entranceGlitch = "Side", hoverGlitch = true }:
        {
            text: string,
            iterations: number,
            iterDelay?: number,
            variants?: typeof variantsDefault,
            entranceGlitch?: "Side" | "Random",
            hoverGlitch?: boolean
        }
) => {

    const textCap = text.toUpperCase();

    const GetRandomChar = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const GetRandomString = () => Array.from(textCap)
        .map((char) => char === " " ? " " : GetRandomChar())
        .join("");

    const [displayedText, setDisplayedText] = useState(GetRandomString());
    const [intervalHandle, setIntervalHandle] = useState<number | undefined>(undefined);

    let i = 0;
    let interval = 0;
    let randomString = "";


    const GlitchSide = () => {
        const index = Math.floor(i / iterations);
        randomString = textCap.substring(0, index) + GetRandomString().substring(index + 1, textCap.length);
        setDisplayedText(randomString);
        i++;

        if (i >= (iterations * textCap.length)) {
            clearInterval(interval)
        }
    }

    const GlitchRandom = () => {
        randomString = Array.from(textCap)
            .map((char, index) => {
                if (char === " ") {
                    return " ";
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
    }

    const Shuffle = () => {
        randomString = GetRandomString()
        setDisplayedText(randomString);
        i++;
        if (i >= (2 ** 32)) {
            clearInterval(interval);
        }
    }

    const GlitchEntrance = (entranceGlitch == "Side") ? GlitchSide : GlitchRandom;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={variants}
            viewport={{ once: false, amount: 0.5 }}

            onAnimationStart={(animation: any) => {
                clearInterval(intervalHandle);
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
            {displayedText}
        </motion.div>
    )
}

export default GlitchText;