import React from "react"
import Square from "./Square"

class SquareMix extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white","white","white","white"]
        }
    }

   whiteBlack = () => { 
        this.setState((prevState)=> ({
            colors: prevState.colors[0] === "white" ? ["black", "black", "black", "black" ]: ["white","white","white","white"]
        }))
   }

   halfPurple = () => {
       this.setState((prevState)=> ({   
            colors: ["purple", "purple", prevState.colors, prevState.colors]
       }))
   }

   leftBlue = () => {
       this.setState((prevState)=> ({
            colors: [prevState.colors, prevState.colors, "blue", prevState.colors]
       }))
   }

   rightBlue = () => {
       this.setState((prevState)=> ({
            colors: [prevState.colors, prevState.colors, prevState.colors, "blue"]

       }))
   }

    render() {
        const mappedColors = this.state.colors.map(color => <Square color={color}/>)

        return (
            <div className="mixedSquare">
                {mappedColors}
                <button onClick={this.whiteBlack}>White/Black</button>
                <button onClick={this.halfPurple}>Half Purple</button>
                <button onClick={this.leftBlue}>Left Blue</button>
                <button onClick={this.rightBlue}>Right Blue</button>
            </div>
        )
    }
}




export default SquareMix 