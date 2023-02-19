const Window = ({
    children,
    title,
    titleStyling = "",
    onClickButtons = undefined,
}: {
    children: any;
    title: string;
    titleStyling?: string;
    onClickButtons?: any;
}) => {
    return (
        <div className="flex h-full flex-grow w-full flex-col rounded-lg border-2 border-white border-opacity-30 shadow shadow-slate-700">
            {/* ToolBar */}
            <div className="flex flex-row-reverse items-center justify-start rounded-t-lg bg-slate-900">
                <a
                    className="flex h-6 w-10  items-center justify-center  rounded-tr-md text-slate-400 hover:bg-red-600 hover:text-slate-200 3xl:h-8"
                    onClick={onClickButtons}
                >
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </a>
                <a
                    className="flex h-6 w-10 items-center  justify-center text-slate-400 hover:bg-slate-600 3xl:h-8"
                    onClick={onClickButtons}
                >
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4h16v16H4V4z"
                        />
                    </svg>
                </a>
                <a
                    className="flex h-6 w-10  items-center justify-center text-slate-400 hover:bg-slate-600 3xl:h-8"
                    onClick={onClickButtons}
                >
                    <svg
                        className="h-4 w-4 text-slate-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                        />
                    </svg>
                </a>
                <p
                    className={
                        "mr-auto pl-2 text-xs font-semibold text-slate-300 3xl:text-base " +
                        titleStyling
                    }
                >
                    {title}
                </p>
            </div>
            {children}
        </div>
    );
};

export default Window;
