

export function CompanyName({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div className="mr-auto z-10 mr-auto mt-4">
          <h1
            className={`text-3xl font-bold tracking-wider transition-all duration-500
              ${
                isDarkMode
                  ? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-purple-400"
                  : "text-stone-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:via-cyan-600 group-hover:to-purple-600"
              }`}
          >
            ⟨ Nord<span className="text-emerald-400">West</span>T /⟩
          </h1>
          <div
            className={`absolute -bottom-2 left-0 w-0 h-0.5
            ${
              isDarkMode
                ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400"
                : "bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600"
            }
            group-hover:w-full transition-all duration-500`}
          ></div>
        </div>
    )
}