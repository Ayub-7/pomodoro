import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react"

interface ControlsProps {
  isActive: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
  onSkip: () => void
}

export function Controls({ isActive, onStart, onPause, onReset, onSkip }: ControlsProps) {
  return (
    <div className="flex justify-center gap-6 mt-6 mb-10">
      <Button className="w-32" onClick={isActive ? onPause : onStart}>
        {isActive ? (
          <>
            <Pause className="mr-2 h-5 w-5" /> Pause
          </>
        ) : (
          <>
            <Play className="mr-2 h-5 w-5" /> Start
          </>
        )}
      </Button>
      <Button
        variant="outline"
        className="w-32 border-gray-400 text-gray-900 hover:bg-gray-200 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
        onClick={onReset}
      >
        <RotateCcw className="mr-2 h-5 w-5" /> Reset
      </Button>
      <Button
        variant="outline"
        className="w-32 border-gray-400 text-gray-900 hover:bg-gray-200 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
        onClick={onSkip}
      >
        <SkipForward className="mr-2 h-5 w-5" /> Skip
      </Button>
    </div>
  )
}