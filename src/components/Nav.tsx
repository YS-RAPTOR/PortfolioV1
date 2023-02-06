import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Social from "./Social";
import Hamburger from "./Hamburger";

const tabs = ["HOME", "ABOUT", "MY PORTFOLIO", "CONTACTS"];
const references = tabs.map(
    (tab) => `#${tab.toLowerCase().replaceAll(" ", "-")}`
);

const socialsToDisplay = [0, 1, 2];

const variantNav = {
    open: {
        scale: 1,
        x: 0,
        y: 0,
        transition: {
            when: "beforeChildren",
            duration: 0.2,
            staggerChildren: 0.05,
        },
    },
    close: {
        scale: 0,
        x: "-3.25rem",
        y: "3.25rem",
        transition: {
            when: "afterChildren",
            duration: 0.2,
            staggerChildren: 0.025,
            staggerDirection: -1,
        }
    },
};

const variantLogo = {
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.1
        }
    },
    close: {
        opacity: 0,
        scale: 0,
    },
}

const variantNavItems = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 5,
            mass: 0.5,
        },
        display: "block",
    },
    close: {
        y: 10,
        opacity: 0,
    }
}

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        addEventListener("resize", (event) => {
            if (window.innerWidth >= 850) {
                setOpen(false);
            }
        });
    }, []);

    return (
        <>
            <header className=" top-0 fixed right-0 z-20 mr-5 mt-5 flex justify-end bar:sticky bar:m-0 bar:block bar:w-screen">
                <div className="flex max-w-fit rounded-xl backdrop-blur-md bar:m-0 bar:min-w-full bar:justify-between bar:rounded-none">
                    {/* Hamburger */}
                    <Hamburger state={isOpen} setState={setOpen} />

                    {/* Bar Info */}
                    <div className="m-5 my-3 mx-8 hidden h-12 w-12 items-center justify-center bg-slate-50 bar:flex">
                        LOGO
                    </div>
                    <nav className="my-3 mx-8 hidden items-center justify-around space-x-10 bar:flex">
                        {tabs.map((tab, index) => (
                            <a
                                className=" my-3 text-base font-bold text-slate-50  underline decoration-lime-300 underline-offset-4 duration-300 ease-in-out hover:text-lime-300"
                                href={references[index]}
                                key={index}
                            >
                                {tab}
                            </a>
                        ))}
                        <a
                            href="/resume"
                            className="my-1 rounded-md border-2 border-lime-300 px-5 py-2 text-base font-bold text-lime-300 duration-300 ease-in-out hover:bg-Primary"
                        >
                            RESUME
                        </a>
                    </nav>
                </div>
                <div className=" hidden h-1 w-auto bar:flex">
                    <div className="mx-5 h-1/6 w-full bg-slate-50 opacity-30"></div>
                </div>
            </header>

            {/* Desktop Socials */}
            <div className="fixed bottom-0 left-0 z-10 ml-5 hidden flex-col items-center justify-center bar:flex">
                <div className="flex flex-col items-center justify-center space-y-5">
                    {socialsToDisplay.map((social, index) => (
                        <Social socialID={social} classNames="w-6 h-6" key={index} />
                    ))}
                </div>
                <span className="mt-2 h-[16vh] w-0.5 bg-slate-50"></span>
            </div>

            {/* Mobile Nav */}
            <div className="bar:hidden">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={variantNav}
                            animate={isOpen ? "open" : "close"}
                            initial="close"
                            exit="close"
                            className="origin-top-right fixed top-0 right-0 z-10 flex h-screen w-full flex-col border-lime-300 backdrop-blur-md sm:w-1/2 sm:border-l-2"
                        >
                            <motion.div
                                variants={variantLogo}
                                className="mt-5 mr-auto ml-5 flex h-16 w-16 items-center justify-center bg-slate-50"
                                key={0}
                            >
                                LOGO
                            </motion.div>
                            <nav
                                className="mx-auto flex flex-grow flex-col items-center"
                                key={1}
                            >
                                {tabs.map((tab, index) => (
                                    <motion.a
                                        className="mt-12 text-lg font-bold text-slate-50 underline decoration-lime-300 underline-offset-4"
                                        href={references[index]}
                                        variants={variantNavItems}
                                        whileHover={{ scale: 1.1, color: "#bef264" }}
                                        key={index}
                                    >
                                        {tab}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="/resume"
                                    className="my-auto justify-self-end rounded-md border-2 border-lime-300 px-12 py-4 text-lg font-bold text-lime-300 "
                                    variants={variantNavItems}
                                    whileHover={{ scale: 1.05, backgroundColor: "#001F54", transition: { duration: 0.2 } }}
                                    whileTap={{ scale: 0.95 }}
                                    key={references.length}
                                >
                                    RESUME
                                </motion.a>
                            </nav>
                            {/* SOCIALS MOBILE */}
                            <div
                                className="mb-5 flex flex-row items-center justify-center space-x-5" key={2}
                            >
                                {socialsToDisplay.map((social, index) => (
                                    <motion.div
                                        variants={variantNavItems}
                                        key={index}
                                        className="w-9 h-9"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Social socialID={social} classNames="w-9 h-9" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Nav;
