import GlitchText from "./GlitchText";
import { motion } from "framer-motion";

const variantCon = {
	visible: {
		transition: {
			staggerChildren: 0.25,
		},
	},
	hidden: {},
};

const variant = (x: string, y: string) => {
	return {
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration: 0.2,
			},
		},
		hidden: {
			opacity: 0,
			y: y,
			x: x,
		},
		hover: {
			scale: 1.1,
		},
	};
};

const Contact = () => {
	return (
		<div className="flex h-full w-full flex-grow flex-col">
			<motion.div
				className="mx-auto flex h-full w-1/2 flex-grow flex-col items-center justify-center gap-y-4 text-center"
				variants={variantCon}
				viewport={{ once: false, amount: 0.2 }}
				initial="hidden"
				whileInView="visible"
			>
				<div className="text-center text-6xl font-bold text-lime-300">
					<GlitchText
						text="Get in Touch"
						iterations={3}
						direction="left"
						variants={variant("10%", "0")}
					></GlitchText>
				</div>
				<motion.div
					className="text-white"
					variants={variant("-10%", "0")}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
					natus aspernatur repellendus doloribus tenetur dolorem?
					Reiciendis ex molestiae recusandae blanditiis. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Corrupti,
					quisquam!
				</motion.div>
				<motion.a
					href="mailto:yashan.sumanaratne@gmail.com"
					className="rounded-md border-2 border-lime-300 px-6 py-4 text-lg font-bold text-lime-300 xs:px-12 "
					variants={variant("0", "10%")}
					whileHover={{
						scale: 1.05,
						backgroundColor: "#001F54",
						transition: { duration: 0.2 },
					}}
					whileTap={{ scale: 0.95 }}
				>
					CONTACT ME
				</motion.a>
			</motion.div>
		</div>
	);
};

export default Contact;
