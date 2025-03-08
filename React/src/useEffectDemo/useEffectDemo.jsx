import React, { useState, useEffect } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  )
  const [bgColor, setBgColor] = useState("#ffffff")

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev + 1 === 10) alert("You've reached 10 seconds!")
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setBgColor("#" + Math.floor(Math.random() * 16777215).toString(16))
    }, 5000)

    return () => clearInterval(colorInterval)
  }, [])

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <h1>Timer: {seconds} sec</h1>
      <h2>Current Time: {currentTime}</h2>
      {!isRunning && <button onClick={() => setIsRunning(true)}>Start</button>}
      {isRunning && <button onClick={() => setIsRunning(false)}>Pause</button>}
      <button
        onClick={() => {
          setSeconds(0)
          setIsRunning(false)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default Timer
