import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useTheme } from "next-themes" // Assuming you're using next-themes for theme management

interface TimerProps {
  timeLeft: number
  isWorkSession: boolean
  progress: number
}

export function Timer({ timeLeft, isWorkSession, progress }: TimerProps) {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="w-64 h-64 mx-auto mb-20">
      <CircularProgressbar
        value={progress}
        text={`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        styles={buildStyles({
          // Text size
          textSize: "16px",

          // Colors for light/dark mode
          pathColor: isDarkMode ? "#ffffff" : "#000000",
          textColor: isDarkMode ? "#ffffff" : "#000000",
          trailColor: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        })}
      />
      <p className="text-center text-lg font-semibold text-foreground mt-6">
        {isWorkSession ? "Work Session" : "Break Session"}
      </p>
    </div>
  )
}