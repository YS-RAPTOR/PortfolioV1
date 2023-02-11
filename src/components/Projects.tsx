import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Window from "./Window"
import Maximize from "./Maximize"

interface IProject {
    title: string,
    description: string,
    links: number[]
}

const variantsCarouselItem = {
    initial: {
        scale: 1,
    },
    hover: {
        scale: 1.1,
        marginBottom: "0.5rem",
        marginLeft: "0.75rem",
        marginRight: "0.75rem",
    }

}

const Projects = ({ projectsInfo }: { projectsInfo: IProject[] }) => {
    const ref = useRef<HTMLDivElement>(null)
    const start = projectsInfo.map((_) => useRef<HTMLDivElement>(null))
    const carousel = useRef<HTMLDivElement>(null)

    const [selected, setSelected] = useState(-1)

    return (
        <div className="relative h-vhw w-full" ref={ref}>
            {/* Carousel */}
            <div className="flex w-full min-h-[15rem] justify-center absolute bottom-7">
                <div className="flex min-h-full w-3/4 justify-center items-end gap-1 overflow-y-visible overflow-x-hidden" ref={carousel}>
                    {projectsInfo.map((project, index) => {
                        return (
                            <motion.div
                                variants={variantsCarouselItem}
                                initial="initial"
                                whileHover="hover"
                                className="cursor-pointer rounded-md flex items-center justify-end bg-white origin-bottom min-w-[4rem] min-h-[12.5rem] max-h-[12.5rem] text-xl capitalize font-bold"
                                style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
                                key={index}
                                onClick={() => setSelected(index)} ref={start[index]}
                                onPointerEnter={() => dispatchEvent(new Event("update-start-loc"))}
                            >
                                {project.title + "\u00A0"}
                            </motion.div>
                        )
                    })}
                </div>

            </div>
            {/* Desktop */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2">

            </div>

            {/* Window */}
            < AnimatePresence mode="sync">
                {selected != -1 &&
                    <Maximize
                        key={selected}
                        rel={ref}
                        start={start[selected]}
                        startContainer={carousel}
                        end={{
                            top: 10,
                            left: "50%",
                            x: "-50%",
                            y: 0
                        }}
                    >
                        {
                            <Window title={projectsInfo[selected].title} onClickButtons={() => { setSelected(-1) }}>
                                <div className="flex flex-col h-full w-[50rem] bg-white rounded-b-md p-2">
                                    {projectsInfo[selected].description}
                                </div>
                            </Window>
                        }
                    </Maximize>
                }
            </AnimatePresence>
        </div >
    )
}

export default Projects