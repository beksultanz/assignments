import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import { ThemeProvider } from "./ThemeProvider"

ReactDOM.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>, 
    document.getElementById("root"))