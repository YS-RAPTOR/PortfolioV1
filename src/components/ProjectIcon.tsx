const ProjectIcon = ({icon, text, onButtonClick}: {icon?: string, text: string, onButtonClick?: any}) => {
    return (
        <div className="text-center text-sm hover:scale-110 hover:font-bold items-center w-24 flex flex-col text-white" onClick={onButtonClick}>
            <img className="text-lime-300 rounded-xl border-2 border-lime-300" src={icon} alt={text} width="88" height="88" decoding="async" loading="lazy"/>
            <div>{text}</div>
        </div>
    );
};

export default ProjectIcon;
