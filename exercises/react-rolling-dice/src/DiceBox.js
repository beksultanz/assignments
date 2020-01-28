import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0, 
            num3: 0, 
            num4: 0, 
            num5: 0
        }
    }

    handleClick = () => {
        let RandomNum = (min, max) => {
             min = 1
             max = 5
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.setState({
            num1: RandomNum(),
            num2: RandomNum(),
            num3: RandomNum(),
            num4: RandomNum(),
            num5: RandomNum()
        })
    }

    reset = () => {
        this.setState({
            num1: 0,
            num2: 0, 
            num3: 0, 
            num4: 0, 
            num5: 0
        })
    }

    render() {
        return (
             <div>
                <h1>{this.state.num1}</h1>
                <h1>{this.state.num2}</h1>
                <h1>{this.state.num3}</h1>
                <h1>{this.state.num4}</h1>
                <h1>{this.state.num5}</h1>
                <button onClick={this.handleClick}>Click</button>
                <button onClick={this.reset}>Reset</button>
            </div>
    )

    }
}

export default DiceBox