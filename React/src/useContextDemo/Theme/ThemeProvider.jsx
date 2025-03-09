import React from "react"
import ThemeContext from "./ThemeContext"

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light")
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
