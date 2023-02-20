import { motion, AnimatePresence } from "framer-motion";
import { getCollection } from "astro:content";
import { useState } from "react";
import Window from "./Window";
import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import Social from "./Social";
import Tech from "./Tech";

const variantsProject = {
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

const variantsContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0,
        },
    },
};

const variantsCarousel = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 0.2,
        },
    },
};

const InitialTitle = "Projects.exe";
const InitialHeading = "Projects I Have Worked On";
const InitialDesc = "Click on a specific project on the menu to learn more about it.";
const projectsInfoResponse = await getCollection("projects");
const projectsInfo = projectsInfoResponse.sort((a, b) => {
    return a.data.rank - b.data.rank;
});

const Projects = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex h-full w-full flex-grow flex-col-reverse lg:flex-row-reverse">
            <motion.div
                variants={variantsContainer}
                className=" flex h-1/6 w-full items-center justify-center lg:mb-0 lg:h-full lg:w-1/6"
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div
                    className="flex h-full w-5/6 flex-shrink origin-bottom items-start justify-between gap-3 overflow-y-auto overflow-x-scroll rounded-t-lg border-t-2 border-lime-300 backdrop-blur-md lg:h-1/2 lg:w-full lg:origin-right lg:flex-col lg:items-center lg:justify-between lg:overflow-x-auto lg:overflow-y-scroll lg:rounded-t-none lg:rounded-l-lg lg:border-t-0 lg:border-l-2 lg:pl-2"
                    variants={variantsCarousel}
                >
                    {projectsInfo.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="min-w-max lg:min-w-min my-3 mx-3 inline-block cursor-pointer text-center text-xl font-semibold text-white transition-colors hover:text-lime-300 hover:text-opacity-75 lg:mx-0 lg:h-fit lg:w-full lg:text-start"
                                onClick={() => {
                                    setSelected(index);
                                }}
                            >
                                {project.data.title.toUpperCase()}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <div className="relative mb-5 flex h-5/6 w-full items-end justify-center lg:h-full lg:w-5/6 bar:mb-0 bar:items-center">
                <AnimatePresence>
                    <motion.div
                        className="absolute h-3/4 w-11/12 sm:w-3/4"
                        variants={variantsProject}
                        initial="initial"
                        animate="normal"
                        exit="exit"
                        key={selected}
                    >
                        <Window
                            title={
                                selected == -1
                                    ? InitialTitle
                                    : projectsInfo[selected].data.title
                            }
                            onClickButtons={() => {
                                setSelected(-1);
                            }}
                        >
                            <div className="relative flex h-full w-full flex-grow flex-col rounded-b-md p-2 backdrop-blur-md max-h-full overflow-y-scroll text-sm sm:text-base lg:text-lg 3xl:text-xl">
                                <div className="inline-block text-xl cs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-lime-300">
                                    <GlitchText
                                        text={
                                            selected == -1
                                                ? InitialHeading
                                                : projectsInfo[selected].data
                                                    .title
                                        }
                                        iterations={Math.ceil(40 / (selected == -1 ? InitialHeading.length : projectsInfo[selected].data.title.length))}
                                        hoverGlitch={false}
                                    />
                                </div>
                                <div className="inline-block text-white ">
                                    <TerminalText textDelay={1 / (selected == -1 ? InitialDesc.length : projectsInfo[selected].data.description.length)}
                                        text={
                                            selected == -1
                                                ? InitialDesc
                                                : projectsInfo[selected].data
                                                    .description
                                        }
                                        startDelay={1}
                                    ></TerminalText>
                                </div>
                                {selected != -1 && (
                                    <div className="mt-auto flex flex-col gap-y-2 p-2">
                                        <div className="bg-lime-300 flex flex-grow rounded h-8 p-1 justify-center items-center gap-x-10">
                                            {projectsInfo[
                                                selected
                                            ].data.technologies.map(
                                                (tech, index) => {
                                                    return (
                                                        <Tech key={index} tech={tech}></Tech>
                                                    );
                                                }
                                            )}
                                        </div>

                                        <div className="flex gap-x-5 items-center">
                                            <Social
                                                socialID={0}
                                                link={
                                                    projectsInfo[selected].data.link
                                                }
                                            ></Social>
                                            {projectsInfo[selected].data.demo &&
                                                <Social
                                                    socialID={3}
                                                    link={
                                                        projectsInfo[selected].data.demo
                                                    }
                                                ></Social>
                                            }
                                            {
                                                !projectsInfo[selected].data.draft && (
                                                    <a
                                                        href={`Projects/${projectsInfo[selected].slug}`}
                                                        className="ml-auto rounded-md border-2 border-lime-300 px-2 py-1 font-bold text-lime-300 duration-300 ease-in-out hover:bg-Primary max-w-max"
                                                    >
                                                        Read More
                                                    </a>
                                                )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Window>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Projects;
