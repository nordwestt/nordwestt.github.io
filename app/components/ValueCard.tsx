import { LucideIcon } from "lucide-react"

interface ValueCardProps {
  icon: LucideIcon
  title: string
  color: "emerald" | "purple" | "cyan"
  isDarkMode: boolean
}

export function ValueCard({ icon: Icon, title, color, isDarkMode }: ValueCardProps) {
  const colorMap = {
    emerald: {
      bg: isDarkMode ? "bg-emerald-900/30" : "bg-emerald-100",
      text: isDarkMode ? "text-emerald-300" : "text-emerald-700",
    },
    purple: {
      bg: isDarkMode ? "bg-purple-900/30" : "bg-purple-100",
      text: isDarkMode ? "text-purple-300" : "text-purple-700",
    },
    cyan: {
      bg: isDarkMode ? "bg-cyan-900/30" : "bg-cyan-100",
      text: isDarkMode ? "text-cyan-300" : "text-cyan-700",
    },
  }

  return (
    <div className={`p-2 sm:p-6 rounded-xl transition-all duration-300 ${
      isDarkMode 
        ? "bg-slate-800/30 hover:bg-slate-800/50 border-slate-700/50" 
        : "bg-white/70 hover:bg-white/90 border-stone-200"
    } border backdrop-blur-sm group`}>
      <div className="flex flex-col items-center space-y-2 sm:space-y-3">
        <div className={`p-2 sm:p-3 rounded-full ${colorMap[color].bg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-5 h-5 sm:w-8 sm:h-8 ${colorMap[color].text}`} />
        </div>
        <p className={`text-sm sm:text-xl font-semibold ${colorMap[color].text}`}>
          {title}
        </p>
      </div>
    </div>
  )
} 