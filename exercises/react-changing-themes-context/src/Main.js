import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

const Main = () => {
    return (
        <ThemeConsumer> 
            {context => (
            <main className={`${context.theme}-theme`}> 
                <h1>{`Click the Button to Toogle the ${context.theme === "Dark" ? "Light" : "Dark"} Theme`}</h1>
            </main>
            )}
        </ThemeConsumer>
    )
}

export default Main 