import React from "react"
import Main from "./Main"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "./Button"

const App = () => {
    return (
        <div className="container"> 
          <Navbar /> 
          <Main /> 
          <Button />
          <Footer /> 
        </div>
    )
}

export default App 