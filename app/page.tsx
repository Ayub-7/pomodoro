"use client"

import { useState, useEffect } from "react"
import { Timer } from "@/components/timer"
import { Controls } from "@/components/controls"
import { Settings } from "@/components/settings"
import { TaskList } from "@/components/task-list"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePomodoro } from "@/hooks/use-pomodoro"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function PomodoroTimer() {
  const [workDuration, setWorkDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [tasks, setTasks] = useState<Task[]>([])

  const { timeLeft, isActive, isWorkSession, progress, start, pause, reset, skip } = usePomodoro(
    workDuration,
    breakDuration,
  )

  useEffect(() => {
    if (timeLeft === 0) {
      const audio = new Audio("/notification.mp3")
      audio.play()
    }
  }, [timeLeft])

  const addTask = (taskText: string) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }])
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Pomodoro Timer</CardTitle>
          <ThemeToggle />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="timer" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="timer">Timer</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
            </TabsList>
            <TabsContent value="timer" className="space-y-6">
              <Timer timeLeft={timeLeft} isWorkSession={isWorkSession} progress={progress} />
              <Controls isActive={isActive} onStart={start} onPause={pause} onReset={reset} onSkip={skip} />
              <Settings
                workDuration={workDuration}
                breakDuration={breakDuration}
                setWorkDuration={setWorkDuration}
                setBreakDuration={setBreakDuration}
              />
            </TabsContent>
            <TabsContent value="tasks">
              <TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTask} removeTask={removeTask} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

