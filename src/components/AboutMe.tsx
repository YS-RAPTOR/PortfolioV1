import GlitchText from "./GlitchText"
import GlitchTextStaggered from "./GlitchTextStaggered"
import TerminalText from "./TerminalText"
import Window from "./Window"

const Skills = `CheckSkills --list --name Yashan
    - C#
>`

const AboutMe = () => {
    return (
        <section className="w-full h-screen bar:h-vhw flex flex-grow flex-shrink items-center justify-center">
            <div className="w-2/5  h-full flex items-center justify-start">
                <h1 className="text-white text-2xl ml-10">About Me</h1>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="max-h-96 h-96 w-full m-10 max-w-2xl">
                    <Window title="terminal.exe">
                        <div className="overflow-y-scroll flex-grow backdrop-blur-md pt-3 rounded-b-md max-h-WindowWithoutTitleBar">
                            <p className="text-white pl-2 text-sm font-normal pb-2">
                                <span>{">\u00A0"}</span>
                                <TerminalText text={Skills} startDelay={1} textDelay={0.015}></TerminalText>
                            </p>
                        </div>
                    </Window >
                </div>
            </div>
        </section>
    )
}

export default AboutMe