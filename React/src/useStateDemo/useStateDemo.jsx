import React from "react"

const UseStateDemo = () => {
  const [count, setCount] = React.useState(0)
  const [prevCount, setPrevCount] = React.useState(0) // Stores previous count for Undo

  const Increase = () => {
    setPrevCount(count)
    const newCount = count + 1
    setCount(newCount)
    if (newCount === 10) alert("You reached 10!")
  }

  const Decrease = () => {
    if (count > 0) {
      setPrevCount(count)
      const newCount = count - 1
      setCount(newCount)
      if (newCount === 10) alert("You reached 10!")
    } else {
      alert("Counter cannot go below 0")
    }
  }

  const Double = () => {
    if (count > 0) {
      setPrevCount(count)
      const newCount = count * 2
      setCount(newCount)
      if (newCount === 10) alert("You reached 10!")
    } else {
      alert("Counter cannot go below 0")
    }
  }

  const Reset = () => {
    setPrevCount(count)
    setCount(0)
  }

  const Randomize = () => {
    setPrevCount(count)
    const newCount = Math.floor(Math.random() * 100) + 1
    setCount(newCount)
    if (newCount === 10) alert("You reached 10!")
  }

  const Undo = () => {
    setCount(prevCount)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Double}>Double</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Randomize}>Randomize</button>
      <button onClick={Undo}>Undo</button>
    </div>
  )
}

export default UseStateDemo
