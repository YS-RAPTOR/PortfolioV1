import GlitchTextStaggered from "./GlitchTextStaggered";

const Hero = () => {
    return (
        <section className="h-full w-full flex flex-grow">
            <div className="flex flex-col justify-center gap-y-16 p-10 min-w-[350px] sm:min-w-[625px] md:min-w-[730px] lg:min-w-[950px]  mx-auto">
                <div className="flex flex-col gap-y-2">
                    <div className="text-lime-300 font-bold inline-block self-start">
                        <GlitchTextStaggered text={"Hi my name is"} iterations={5}></GlitchTextStaggered>
                    </div>
                    <div className="text-white  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-start">
                        <GlitchTextStaggered text={"YASHAN"} iterations={10}></GlitchTextStaggered>
                    </div>
                    <div className="text-lime-300 font-bold inline-block self-start">
                        <GlitchTextStaggered text={"and"} iterations={21}></GlitchTextStaggered>
                    </div>
                </div>


                <div className="text-lime-300 font-bold text-9xl inline-block self-center">
                    <GlitchTextStaggered text={"I"} iterations={68} direction="left"></GlitchTextStaggered>
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className="text-lime-300 font-bold inline-block self-end">
                        <GlitchTextStaggered text={"am an"} iterations={13} direction="left"></GlitchTextStaggered>
                    </div>
                    <div className="text-white  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-end">
                        <GlitchTextStaggered text={"ENGINEER"} iterations={8} direction="left"></GlitchTextStaggered>
                    </div>
                    <div className="text-lime-300 font-bold  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl inline-block self-end">
                        <GlitchTextStaggered text={"&"} iterations={63} direction="left"></GlitchTextStaggered>
                    </div>
                    <div className="text-white   text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-end">
                        <GlitchTextStaggered text={"DEVELOPER"} iterations={7} direction="left"></GlitchTextStaggered>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;