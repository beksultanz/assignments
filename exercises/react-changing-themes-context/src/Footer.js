import React from "react" 
import {ThemeConsumer} from "./ThemeProvider"

const Footer = ()=> {
    return (
        <ThemeConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}> 
                    <p>The amazing footer</p>
                </footer>
            )}
        </ThemeConsumer>
        
    )
}
export default Footer 