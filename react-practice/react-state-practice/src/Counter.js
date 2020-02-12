import React from "react"
import CounterDisplay from "./CounterDisplay"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            clickCounter: 0 
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                clickCounter: prevState.clickCounter + 1
            }   
        })
    }
    
    render() {
        return (
            <div> 
                <CounterDisplay counter={this.state.clickCounter}/> 
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

export default Counter 