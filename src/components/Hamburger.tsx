import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hamDelay = 0.6;

const variantHamTop = {
    open: {
        rotate: [0, 45],
        y: [7.5, 7.5],
        transition: {
            times: [0.5, 1],
            duration: 0.2,
        },
    },
    close: {
        rotate: [0, 0],
        y: [7.5, 0],
        transition: {
            times: [0.5, 1],
            duration: 0.2,
            delay: hamDelay
        },
    },
};

const variantHamMid = {
    open: {
        scale: 0,
        transition: {
            duration: 0.1,
        },
        transitionEnd: {
            display: "none",
        },
    },
    close: {
        scale: 1,
        display: "block",
        transition: {
            delay: 0.1 + hamDelay,
            duration: 0.1,
        },
    },
};

const variantHamBot = {
    open: {
        rotate: [0, -45],
        y: [-7.5, -7.5],
        transition: {
            times: [0.5, 1],
            duration: 0.2,
        },
    },
    close: {
        rotate: [0, 0],
        y: [-7.5, 0],
        transition: {
            duration: 0.2,
            times: [0, 0.5, 1],
            delay: hamDelay,
        },
    },
};

const Hamburger = ({ state, setState }: { state: boolean; setState: any }) => {
    const onClick = () => {
        setState(!state);
    };

    return (
        <a
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-xl border-2 border-slate-50 bar:hidden"
            onClick={onClick}
        >
            <div className="flex h-1/2 w-1/2 flex-col justify-around  duration-300">
                <motion.span
                    variants={variantHamTop}
                    animate={state ? "open" : "close"}
                    className="h-1 w-auto bg-slate-50"
                />
                <motion.span
                    variants={variantHamMid}
                    animate={state ? "open" : "close"}
                    className="h-1 w-auto bg-slate-50"
                />
                <motion.span
                    variants={variantHamBot}
                    animate={state ? "open" : "close"}
                    className="h-1 w-auto bg-slate-50"
                />
            </div>
        </a>
    );
};

export default Hamburger;
