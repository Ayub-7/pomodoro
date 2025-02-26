import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

interface TimerProps {
  timeLeft: number
  isWorkSession: boolean
  progress: number
}

export function Timer({ timeLeft, isWorkSession, progress }: TimerProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="w-64 h-64 mx-auto mb-8">
      <CircularProgressbar
        value={progress}
        text={`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
        styles={buildStyles({
          // Text size
          textSize: "16px",
          // Colors
          pathColor: isWorkSession ? "var(--primary)" : "var(--secondary)",
          textColor: "var(--foreground)",
          trailColor: "var(--muted)",
          backgroundColor: "var(--background)",
        })}
      />
      <p className="text-center mt-4 text-lg font-semibold text-foreground">
        {isWorkSession ? "Work Session" : "Break Session"}
      </p>
    </div>
  )
}

