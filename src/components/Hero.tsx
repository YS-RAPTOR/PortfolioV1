import GlitchTextStaggered from "./GlitchTextStaggered";

const Hero = () => {

	return (
		<div className="flex h-full w-full flex-grow">
			<div className="mx-auto flex min-w-max flex-col justify-center gap-y-16 p-10 sm:min-w-[625px] md:min-w-[730px] lg:min-w-[950px] xs:min-w-[400px]">
				<div className="flex flex-col gap-y-2">
					<div className="inline-block self-start font-bold text-lime-300 3xl:text-2xl">
						<GlitchTextStaggered
							text={"Hi my name is"}
							iterations={5}
						></GlitchTextStaggered>
					</div>
					<div className="inline-block  self-start text-5xl  font-bold  text-white sm:text-6xl md:text-7xl lg:text-8xl">
						<GlitchTextStaggered
							text={"YASHAN"}
							iterations={10}
						></GlitchTextStaggered>
					</div>
					<div className="inline-block self-start font-bold text-lime-300 3xl:text-2xl">
						<GlitchTextStaggered
							text={"and"}
							iterations={21}
						></GlitchTextStaggered>
					</div>
				</div>

				<div className="inline-block   self-center text-9xl font-bold text-lime-300">
					<GlitchTextStaggered
						text={"I"}
						iterations={68}
						direction="left"
					></GlitchTextStaggered>
				</div>

				<div className="flex flex-col gap-y-2">
					<div className="inline-block self-end font-bold text-lime-300 3xl:text-2xl">
						<GlitchTextStaggered
							text={"am an"}
							iterations={13}
							direction="left"
						></GlitchTextStaggered>
					</div>
					<div className="inline-block  self-end  text-5xl  font-bold  text-white sm:text-6xl md:text-7xl lg:text-8xl">
						<GlitchTextStaggered
							text={"ENGINEER"}
							iterations={8}
							direction="left"
						></GlitchTextStaggered>
					</div>
					<div className="inline-block self-end  text-5xl font-bold  text-lime-300  sm:text-6xl md:text-7xl lg:text-8xl">
						<GlitchTextStaggered
							text={"&"}
							iterations={63}
							direction="left"
						></GlitchTextStaggered>
					</div>
					<div className="inline-block self-end text-5xl  font-bold  text-white sm:text-6xl md:text-7xl lg:text-8xl">
						<GlitchTextStaggered
							text={"DEVELOPER"}
							iterations={7}
							direction="left"
						></GlitchTextStaggered>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
