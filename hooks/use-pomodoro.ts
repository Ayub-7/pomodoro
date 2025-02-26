"use client"

import { useState, useEffect, useCallback } from "react"

export function usePomodoro(workDuration: number, breakDuration: number) {
  const [timeLeft, setTimeLeft] = useState(workDuration * 60)
  const [isActive, setIsActive] = useState(false)
  const [isWorkSession, setIsWorkSession] = useState(true)
  const [progress, setProgress] = useState(0)

  const switchSession = useCallback(() => {
    setIsWorkSession((prev) => !prev)
    setTimeLeft((isWorkSession ? breakDuration : workDuration) * 60)
  }, [isWorkSession, workDuration, breakDuration])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
        setProgress((prev) => prev + 100 / (isWorkSession ? workDuration : breakDuration) / 60)
      }, 1000)
    } else if (timeLeft === 0) {
      switchSession()
      setProgress(0)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, isWorkSession, workDuration, breakDuration, switchSession])

  const start = () => setIsActive(true)
  const pause = () => setIsActive(false)
  const reset = () => {
    setIsActive(false)
    setIsWorkSession(true)
    setTimeLeft(workDuration * 60)
    setProgress(0)
  }
  const skip = () => {
    switchSession()
    setProgress(0)
  }

  return { timeLeft, isActive, isWorkSession, progress, start, pause, reset, skip }
}

