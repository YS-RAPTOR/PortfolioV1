const Tech = ({ tech }: { tech: string }) => {
    return (
        <div className="font-black min-w-[8em] ">
            {tech.toUpperCase()}
        </div>
    )
}

export default Tech