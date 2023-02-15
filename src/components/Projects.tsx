import { motion, AnimatePresence } from "framer-motion";
import { getCollection } from "astro:content";
import { useState, useEffect } from "react";
import Window from "./Window";
import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import Social from "./Social";

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
const InitialHeading = "PROJECTS";
const InitialDesc = "HELLO ME";
const projectsInfo = await getCollection("projects");

const Projects = () => {
	const [selected, setSelected] = useState(-1);

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
								className="my-3 mx-3 inline-block cursor-pointer text-center text-xl font-semibold text-white transition-colors hover:text-lime-300 hover:text-opacity-75 lg:mx-0 lg:h-fit lg:w-full lg:text-start"
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
							<div className="relative flex h-full w-full flex-grow flex-col rounded-b-md p-2 backdrop-blur-md">
								<div className="inline-block text-5xl text-lime-300">
									<GlitchText
										text={
											selected == -1
												? InitialHeading
												: projectsInfo[selected].data
														.title
										}
										iterations={5}
										hoverGlitch={false}
									/>
								</div>
								<div className="inline-block text-lg text-white">
									<TerminalText
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
									<div className="mt-auto flex p-2">
										<Social
											socialID={0}
											link={
												projectsInfo[selected].data.link
											}
										></Social>
										{projectsInfo[
											selected
										].data.technologies.map(
											(tech, index) => {
												return (
													<div className="text-white">
														{tech}
													</div>
												);
											}
										)}
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
