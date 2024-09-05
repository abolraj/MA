function Monitor({text}) {
    return (
        <div className="monitor text-lg flex items-center justify-start text-left bg-base-100 bordered border-2 border-info rounded-md p-2 px-4 w-72 h-10">
            <p>
                {text}
            </p>
        </div>
    )
}

export default Monitor