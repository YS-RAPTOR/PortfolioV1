const Tech = ({ tech }: { tech: string }) => {
    return (
        <div className="font-black">
            {tech.toUpperCase()}
        </div>
    )
}

export default Tech;