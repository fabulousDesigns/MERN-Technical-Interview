import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
//import './index.css'
import App from "./App.jsx"
import ThemeProvider from "./useContextDemo/Theme/ThemeProvider.jsx"
import AuthProvider from "./useContextDemo/Auth/AuthProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
