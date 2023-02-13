import GlitchTextStaggered from "./GlitchTextStaggered";

const Hero = () => {
    return (
        <section className="h-full w-full flex flex-grow">
            <div className="flex flex-col justify-between p-10 gap-y-2 min-w-[350px] sm:min-w-[625px] md:min-w-[730px] lg:min-w-[950px]  mx-auto">
                <div className="flex flex-col">
                    <div className="text-lime-300 font-bold inline-block self-start">
                        <GlitchTextStaggered text={"Hi my name is"} iterations={4}></GlitchTextStaggered>
                    </div>
                    <div className="text-white  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-start">
                        <GlitchTextStaggered text={"YASHAN"} iterations={9}></GlitchTextStaggered>
                    </div>
                    <div className="text-lime-300 font-bold inline-block self-start">
                        <GlitchTextStaggered text={"and"} iterations={4}></GlitchTextStaggered>
                    </div>
                </div>


                <div className="text-lime-300 font-bold text-9xl inline-block self-center">
                    <GlitchTextStaggered text={"I"} iterations={5}></GlitchTextStaggered>
                </div>

                <div className="flex flex-col">
                    <div className="text-lime-300 font-bold inline-block self-end">
                        <GlitchTextStaggered text={"am an"} iterations={4}></GlitchTextStaggered>
                    </div>
                    <div className="text-white  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-end">
                        <GlitchTextStaggered text={"ENGINEER"} iterations={7}></GlitchTextStaggered>
                    </div>
                    <div className="text-lime-300 font-bold  text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl inline-block self-end">
                        <GlitchTextStaggered text={"&"} iterations={60}></GlitchTextStaggered>
                    </div>
                    <div className="text-white   text-3xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold inline-block self-end">
                        <GlitchTextStaggered text={"DEVELOPER"} iterations={7}></GlitchTextStaggered>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;