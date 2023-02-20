import { motion } from "framer-motion";

// Intro Effect
const variantsCon = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const FadeIn = {
	hidden: {
		y: 10,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 50,
			damping: 5,
			mass: 0.5,
		},
	},
};

// Rubber Band Effect
const startRubberBand = (e: any) => {
	e.target.classList.add("animate-rubberBand");
};
const endRubberBand = (e: any) => {
	e.target.classList.remove("animate-rubberBand");
};

const BouncyText = ({
	text,
	hoverColor = "#bef264",
}: {
	text: string;
	hoverColor?: string;
}) => {
	return (
		<motion.div
			variants={variantsCon}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.2 }}
		>
			{text
				.replaceAll(" ", "\u00A0")
				.split("")
				.map((char, index) => {
					return (
						<motion.span
							variants={FadeIn}
							viewport={{ once: false, amount: 0.2 }}
							whileHover={{ color: hoverColor }}
							className=" random inline-block w-fit"
							key={index}
							onPointerOver={startRubberBand}
							onAnimationEnd={endRubberBand}
						>
							{char}
						</motion.span>
					);
				})}
		</motion.div>
	);
};

export default BouncyText;
