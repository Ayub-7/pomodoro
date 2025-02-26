import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface SettingsProps {
  workDuration: number
  breakDuration: number
  setWorkDuration: (duration: number) => void
  setBreakDuration: (duration: number) => void
}

export function Settings({ workDuration, breakDuration, setWorkDuration, setBreakDuration }: SettingsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="work-duration">Work Duration (minutes)</Label>
        <Slider
          id="work-duration"
          min={1}
          max={60}
          step={1}
          value={[workDuration]}
          onValueChange={(value) => setWorkDuration(value[0])}
        />
        <p className="text-sm text-muted-foreground">{workDuration} minutes</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="break-duration">Break Duration (minutes)</Label>
        <Slider
          id="break-duration"
          min={1}
          max={30}
          step={1}
          value={[breakDuration]}
          onValueChange={(value) => setBreakDuration(value[0])}
        />
        <p className="text-sm text-muted-foreground">{breakDuration} minutes</p>
      </div>
    </div>
  )
}

