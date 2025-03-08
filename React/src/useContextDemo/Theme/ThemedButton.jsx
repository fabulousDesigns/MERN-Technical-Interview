import React from "react"
import ThemeContext from "./ThemeContext"

const ThemedButton = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
        padding: "10px",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        outline: "none",
        borderRadius: "5px",
      }}
    >
      Toggle theme
    </button>
  )
}

export default ThemedButton
