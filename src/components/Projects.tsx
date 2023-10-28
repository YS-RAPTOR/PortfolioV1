import { motion, AnimatePresence } from "framer-motion";
import type { CollectionEntry } from "astro:content";
import { useState } from "react";
import Window from "./Window";
import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import ProjectIcon from "./ProjectIcon";
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

const Projects = ({ projectsInfoResponse }: { projectsInfoResponse: CollectionEntry<"projects-data">[] }) => {

    const projectsInfo = projectsInfoResponse.sort((a, b) => {
        return a.data.rank - b.data.rank;
    });

    const [selected, setSelected] = useState(-1);

    return (
        <div className="flex h-full w-full flex-grow flex-col-reverse lg:flex-row-reverse">
            <div className="relative mb-5 flex h-5/6 w-full items-center justify-center lg:h-full  bar:mb-0 bar:items-center">
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
                            <div className="relative flex h-full w-full flex-grow flex-col rounded-b-md p-2 backdrop-blur-md max-h-full overflow-y-scroll overflow-x-hidden text-sm sm:text-base lg:text-lg 3xl:text-xl">
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
                                    <TerminalText textDelay={1.5 / (selected == -1 ? InitialDesc.length : projectsInfo[selected].data.description.length)}
                                        text={
                                            selected == -1
                                                ? InitialDesc
                                                : projectsInfo[selected].data
                                                    .description
                                        }
                                        startDelay={1}
                                    ></TerminalText>
                                </div>
                                {selected == -1 && (
                                    <div className="pt-5">
                                        <div className="flex justify-around items-start h-full gap-10 flex-wrap content-start">
                                            {projectsInfo.map((project, index) => {
                                                return (
                                                    <ProjectIcon key={index} icon={"/Portfolio/projects/"+project.id+".webp"} text={project.data.title} onButtonClick={() => {setSelected(index)}}/>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                {selected != -1 && (
                                    <div className="mt-auto flex flex-col gap-y-2 p-2 pt-4">
                                        <div className="bg-lime-300 flex flex-wrap flex-grow rounded h-fit p-1 justify-center items-center text-center gap-x-1">
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
                                            {/* {
                                                !projectsInfo[selected].data.draft && (
                                                    <a
                                                        href={`/Portfolio/Projects/${projectsInfo[selected].slug}`}
                                                        className="ml-auto rounded-md border-2 border-lime-300 px-2 py-1 font-bold text-lime-300 duration-300 ease-in-out hover:bg-Primary max-w-max"
                                                    >
                                                        Read More
                                                    </a>
                                                )} */}
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
