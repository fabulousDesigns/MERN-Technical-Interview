import React from "react"
import UseStateDemo from "./useStateDemo/useStateDemo"
import UseEffectDemo from "./useEffectDemo/useEffectDemo"
import ThemedButton from "./useContextDemo/Theme/ThemedButton"
import Navbar from "./useContextDemo/Auth/Navbar"

function App() {
  return (
    <>
      {/* // <UseStateDemo /> */}
      {/* <UseEffectDemo/> */}
      {/* <ThemedButton /> */}
      <Navbar />
      <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Decoration />
    </div>
  )
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  )
}

function Decoration() {
  return <div className="decoration">⛵️</div>
}

export default App
