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
    <div className="flex justify-center gap-4 mt-4 mb-8">
      <Button className="w-28" onClick={isActive ? onPause : onStart}>
        {isActive ? (
          <>
            <Pause className="mr-2 h-4 w-4" /> Pause
          </>
        ) : (
          <>
            <Play className="mr-2 h-4 w-4" /> Start
          </>
        )}
      </Button>
      <Button variant="outline" className="w-28" onClick={onReset}>
        <RotateCcw className="mr-2 h-4 w-4" /> Reset
      </Button>
      <Button variant="outline" className="w-28" onClick={onSkip}>
        <SkipForward className="mr-2 h-4 w-4" /> Skip
      </Button>
    </div>
  )
}

