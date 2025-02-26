"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"

interface Task {
  id: number
  text: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  addTask: (task: string) => void
  toggleTask: (id: number) => void
  removeTask: (id: number) => void
}

export function TaskList({ tasks, addTask, toggleTask, removeTask }: TaskListProps) {
  const [newTask, setNewTask] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      addTask(newTask.trim())
      setNewTask("")
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="bg-input-background text-input-foreground"
        />
        <Button type="submit">
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </form>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between space-x-2 bg-secondary p-2 rounded-md">
            <div className="flex items-center space-x-2">
              <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
              <label
                htmlFor={`task-${task.id}`}
                className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {task.text}
              </label>
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeTask(task.id)} aria-label="Remove task">
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

