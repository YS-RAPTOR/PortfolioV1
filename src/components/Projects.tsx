import { motion, AnimatePresence } from "framer-motion";
import { getCollection } from "astro:content";
import { useState } from "react";
import Window from "./Window";

const variantsItem = {
    initial: {
        y: "-150%",
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.5,
        },
    },
    normal: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        y: "150%",
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const InitialTitle = "Projects.exe";
const InitialDesc = "HELLO ME";
const projectsInfo = await getCollection("projects");

const Projects = () => {
    const [isLeft, setLeft] = useState(false);
    const [selected, setSelected] = useState(-1);

    console.log(projectsInfo);

    return (
        <section className="flex h-screen w-full flex-grow flex-col-reverse bar:h-vhw lg:flex-row">
            <div className="mb-2 flex h-[15%] w-full items-center justify-center lg:mb-0 lg:h-full lg:w-1/6">
                <div className="flex justify-start h-full w-5/6 flex-shrink items-center lg:justify-between overflow-y-auto overflow-x-scroll rounded-lg border-2 border-lime-300 backdrop-blur-md lg:h-3/4 lg:w-full lg:flex-col gap-3 lg:overflow-x-auto lg:overflow-y-scroll lg:pl-2"
                >
                    {projectsInfo.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="inline-block cursor-pointer text-xl font-semibold text-white lg:my-3 lg:h-fit lg:w-full lg:mx-0 mx-3 text-center lg:text-start"
                                onClick={() => {
                                    setSelected(index);
                                }}
                            >
                                {project.data.title.toUpperCase()}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="relative flex h-5/6 w-full items-center justify-center lg:h-full lg:w-5/6">
                <AnimatePresence>
                    <motion.div
                        className="absolute h-3/4 w-11/12 sm:w-3/4"
                        variants={variantsItem}
                        initial="initial"
                        animate="normal"
                        exit="exit"
                        key={selected}
                    >
                        <Window
                            title={selected == -1 ? InitialTitle : projectsInfo[selected].data.title}
                            onClickButtons={() => { setSelected(-1) }}
                        >
                            <div className="flex h-full w-full flex-col items-center justify-center text-white">
                                {selected == -1 ? InitialDesc : projectsInfo[selected].body}
                            </div>
                        </Window>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
