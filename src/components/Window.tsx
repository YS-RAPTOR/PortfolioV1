const Window = ({ children, title, titleStyling = "", onClickButtons = undefined }: { children: any, title: string, titleStyling?: string, onClickButtons?: any }) => {
    return (
        <div className="w-full min-h-full border-2 rounded-lg border-white border-opacity-30 flex flex-col shadow shadow-slate-700">
            {/* ToolBar */}
            <div className="flex flex-row-reverse justify-start items-center bg-slate-900 rounded-t-lg">
                <a className="h-6 w-10 hover:bg-red-600 rounded-tr-md  flex justify-center items-center text-slate-400 hover:text-slate-200" onClick={onClickButtons}>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
                <a className="h-6 w-10 hover:bg-slate-600  flex justify-center items-center text-slate-400" onClick={onClickButtons}>
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                    </svg>
                </a>
                <a className="h-6 w-10  hover:bg-slate-600 flex justify-center items-center text-slate-400" onClick={onClickButtons}>
                    <svg className="w-4 h-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                </a>
                <p className={"mr-auto pl-2 text-slate-300 text-xs font-semibold " + titleStyling}>
                    {title}
                </p>
            </div>
            {children}
        </div>

    )
}

export default Window