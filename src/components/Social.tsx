import { motion } from "framer-motion";

const socials = [
	{
		svg: (
			<g data-name="Layer 2">
				<rect width="24" height="24" opacity="0" />
				<path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z" />
			</g>
		),
		link: "https://github.com/YS-RAPTOR",
	},
	{
		svg: (
			<g data-name="Layer 2">
				<g data-name="linkedin">
					<rect
						width="24"
						height="24"
						transform="rotate(180 12 12)"
						opacity="0"
					/>
					<path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
					<path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
					<path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
				</g>
			</g>
		),
		link: "https://www.linkedin.com/in/ys-raptor/",
	},
	{
		svg: (
			<g data-name="Layer 2">
				<g data-name="email">
					<rect width="24" height="24" opacity="0" />
					<path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
				</g>
			</g>
		),
		link: "mailto:yashan.sumanaratne@gmail.com",
	},
	{
		svg: (
			<g data-name="Layer 2">
				{/* External Link */}
				<path
					xmlns="http://www.w3.org/2000/svg"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10V6.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L17.5858 5H14ZM5 7C4.44772 7 4 7.44772 4 8V19C4 19.5523 4.44772 20 5 20H16C16.5523 20 17 19.5523 17 19V14.4375C17 13.8852 17.4477 13.4375 18 13.4375C18.5523 13.4375 19 13.8852 19 14.4375V19C19 20.6569 17.6569 22 16 22H5C3.34315 22 2 20.6569 2 19V8C2 6.34315 3.34315 5 5 5H9.5625C10.1148 5 10.5625 5.44772 10.5625 6C10.5625 6.55228 10.1148 7 9.5625 7H5Z"
				/>
			</g>
		),
		link: "",
	},
];

const variantSocial = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			duration: 0.1,
			ease: "easeOut",
		},
	},
	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.95,
	},
};

const Social = ({
	socialID,
	hoverColor = "#bef264",
	height = 24,
	width = 24,
	seed = "",
	link = "",
}: {
	socialID: number;
	hoverColor?: string;
	height?: number;
	width?: number;
	seed?: string;
	link?: string;
}) => {
	const social = socials[socialID];

	if (social === undefined) {
		return <div></div>;
	}

	return (
		<motion.a
			href={link == "" ? social.link : link}
			target="_blank"
			rel="noopener noreferrer"
			className={"lime relative h-6 w-6 rounded-full"}
			variants={variantSocial}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			whileTap="tap"
		>
			<motion.svg
				fill="#fff"
				viewBox={"0 0 24 24"}
				height={height}
				width={width}
				xmlns="http://www.w3.org/2000/svg"
				initial={{
					filter: "None",
				}}
				whileHover={{
					fill: hoverColor,
					filter: "url(#glow" + seed + ")",
				}}
			>
				<defs>
					<filter
						id={"glow" + seed}
						filterUnits="userSpaceOnUse"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="5"
							result="blur5"
						/>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur10"
						/>
						<feMerge result="blur-merged">
							<feMergeNode in="blur10" />
						</feMerge>
						<feMerge>
							<feMergeNode in="blur" />
							<feMergeNode in="blur5" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				{social.svg}
			</motion.svg>
		</motion.a>
	);
};

export default Social;
