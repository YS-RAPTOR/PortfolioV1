import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import Window from "./Window";
import { motion } from "framer-motion";

const Skills = `CheckSkills --list --name Yashan
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
    - C#
>`;

const variantsContainer = {
    hidden: {
    },
    visible: {
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const variant = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const AboutMe = () => {
    return (
        <motion.div
            variants={variantsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="flex lg:flex-row flex-col h-full w-full flex-shrink flex-grow items-center justify-center"
        >
            <div className="flex flex-col h-full w-5/6 lg:w-2/5 items-start justify-end sm:justify-center">
                <div className="mx-auto font-bold text-4xl xs:text-7xl text-lime-300 lg:ml-10 text-center lg:text-left">
                    <GlitchText text="ABOUT ME" iterations={5} entranceGlitch="Random"></GlitchText>
                </div>
                <motion.div variants={variant} className="text-center lg:text-left text-white lg:ml-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, debitis praesentium
                    laudantium fuga explicabo itaque error nam saepe placeat at aperiam! Sunt nulla itaque odio
                    quidem sed voluptatem enim at labore. Molestiae ducimus officia reiciendis suscipit libero
                    deserunt tempora dolorum repellendus a qui earum, quidem sunt? Deleniti odio iure ratione?
                </motion.div>
            </div>
            <motion.div
                variants={variant}
                className="flex h-full w-full items-center justify-center">
                <div className="m-10 h-96 max-h-96 w-full max-w-2xl 3xl:max-w-6xl 3xl:h-[48rem] 3xl:max-h-[48rem]">
                    <Window title="terminal.exe" titleStyling="text-">
                        <div className="3xl:max-h-[46rem] max-h-[22.25rem] flex-grow overflow-y-scroll rounded-b-lg pt-3 backdrop-blur-lg">
                            <div className="pl-2 text-sm font-normal 3xl:text-lg text-white">
                                <span>{">\u00A0"}</span>
                                <TerminalText
                                    text={Skills}
                                    startDelay={1}
                                    textDelay={0.015}
                                ></TerminalText>
                            </div>
                        </div>
                    </Window>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
