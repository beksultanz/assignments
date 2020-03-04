import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

const Button = () => {
    return (
        <ThemeConsumer>
        {context => (
            <div> 
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Toggle Theme
                </button> 
            </div>
        )}
        </ThemeConsumer>
    )
}
export default Button 