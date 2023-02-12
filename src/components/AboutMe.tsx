import GlitchText from "./GlitchText";
import GlitchTextStaggered from "./GlitchTextStaggered";
import TerminalText from "./TerminalText";
import Window from "./Window";

const Skills = `CheckSkills --list --name Yashan
    - C#
>`;

const AboutMe = () => {
	return (
		<section className="flex h-screen w-full flex-shrink flex-grow items-center justify-center bar:h-vhw">
			<div className="flex  h-full w-2/5 items-center justify-start">
				<h1 className="ml-10 text-2xl text-white">About Me</h1>
			</div>
			<div className="flex h-full w-full items-center justify-center">
				<div className="m-10 h-96 max-h-96 w-full max-w-2xl">
					<Window title="terminal.exe">
						<div className="max-h-WindowWithoutTitleBar flex-grow overflow-y-scroll rounded-b-md pt-3 backdrop-blur-md">
							<p className="pl-2 pb-2 text-sm font-normal text-white">
								<span>{">\u00A0"}</span>
								<TerminalText
									text={Skills}
									startDelay={1}
									textDelay={0.015}
								></TerminalText>
							</p>
						</div>
					</Window>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
