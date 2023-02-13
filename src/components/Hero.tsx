import GlitchTextStaggered from "./GlitchTextStaggered";

const Hero = () => {
    return (
        <section className="h-full w-full flex flex-col justify-center items-start">
            <div className="text-lime-300 font-bold inline-block">
                <GlitchTextStaggered text="Hi my name is" iterations={4}></GlitchTextStaggered>
            </div>
            <div className="text-white text-8xl font-bold inline-block">
                <GlitchTextStaggered text="YASHAN" iterations={9}></GlitchTextStaggered>
            </div>


            <div className="text-lime-300 font-bold inline-block">
                <GlitchTextStaggered text="and I am an" iterations={5}></GlitchTextStaggered>
            </div>
            <div className="text-white text-8xl font-bold inline-block">
                <GlitchTextStaggered text="Engineer" iterations={7}></GlitchTextStaggered>
                <div className="text-lime-300 text-6xl">
                    <GlitchTextStaggered text="&" iterations={60}></GlitchTextStaggered>
                </div>
                <GlitchTextStaggered text="Developer" iterations={7}></GlitchTextStaggered>
            </div>
        </section>
    )
}

export default Hero;