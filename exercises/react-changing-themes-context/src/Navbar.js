import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

const Navbar = () => {
    return (
        <ThemeConsumer> 
            {context => ( 
                <nav className={`${context.theme}-theme`}> 
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </nav>
            )}
        </ThemeConsumer>
        
    )
}
export default Navbar 