import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import Window from "./Window";
import { motion } from "framer-motion";

const Skills = `CheckSkills --list --name Yashan
- Programming Languages:
    - C++
    - C#
    - TypeScript
    - Python
    - Matlab
    - VHDL
    - HLSL
- AI:
    - Pytorch
    - Tensorflow
    - OpenCV
    - OpenAI Gym
- Web Developer:
    - HTML
    - CSS
    - React
    - NextJs
    - Astro
- Embedded Systems:
    - Arduino
    - Xilinx
    - CPLD
- Game Development:
    - Unity
- Tools:
    - Git
    - Github
    - VSCode
    - Visual Studio
    - Jupyter Notebook
    - WSL2
    - Docker
>`;

const variantsContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

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
		},
	},
};

const AboutMe = () => {
	return (
		<motion.div
			variants={variantsContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.5 }}
			className="flex h-full w-full flex-shrink flex-grow flex-col items-center justify-center lg:flex-row"
		>
			<div className="flex h-full w-5/6 flex-col items-start justify-end sm:justify-center lg:w-2/5">
				<div className="mx-auto text-center text-4xl font-bold text-lime-300 lg:ml-10 lg:text-left xs:text-7xl">
					<GlitchText
						text="ABOUT ME"
						iterations={5}
						entranceGlitch="Random"
					></GlitchText>
				</div>
				<motion.div
					variants={variant}
					className="text-center text-white lg:ml-10 lg:text-left"
				>
					dawdadadad
				</motion.div>
			</div>
			<motion.div
				variants={variant}
				className="flex h-full w-full items-center justify-center"
			>
				<div className="m-10 h-96 max-h-96 w-full max-w-2xl 3xl:h-[48rem] 3xl:max-h-[48rem] 3xl:max-w-6xl">
					<Window title="terminal.exe" titleStyling="text-">
						<div className="max-h-[22.25rem] flex-grow overflow-y-scroll rounded-b-lg pt-3 backdrop-blur-lg 3xl:max-h-[46rem]">
							<div className="pl-2 text-sm font-normal text-white 3xl:text-lg">
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
