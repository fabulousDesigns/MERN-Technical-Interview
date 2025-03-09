import React from "react"
import AuthContext from "./AuthContext"

const Navbar = () => {
  const { isAuthenticated, login, logout } = React.useContext(AuthContext)

  return (
    <nav>
      {isAuthenticated ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </nav>
  )
}

export default Navbar
