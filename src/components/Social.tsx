interface Socials {
    svg: string;
    link: string;
}

const socials: Socials[] = [
    { svg: "/svgs/github.svg", link: "https://github.com/YS-RAPTOR" },
    {
        svg: "/svgs/linkedin.svg",
        link: "https://www.linkedin.com/in/yashan-sumanaratne-8bb1491ab/",
    },
    { svg: "/svgs/email.svg", link: "mailto:yashan.sumanaratne@gmail.com" },
];

const Social = ({
    socialID,
    classNames,
}: {
    socialID: number;
    classNames: string;
}) => {
    const social = socials[socialID];

    return (
        <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames}
        >
            <img className="h-full w-full" src={social.svg} alt="socials" />
        </a>
    );
};

export default Social;
