import React from "react"
import PeopleData from "./PeopleData"

class App extends React.Component { 
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "", 
            people: [], 
            list: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        let {firstName, lastName} = this.state
        const newPerson = {firstName, lastName}

        this.setState((prevState) => ({
            people: [...prevState.people, newPerson],
            firstName: "", 
            lastName: ""
        }))
        
    }

    render() {
   
        return (
        <div>
            <PeopleData people={this.state.people} /> 
            <form onSubmit={this.handleSubmit}> 
            <input 
            type="text" 
            name="firstName" value={this.state.firstName} 
            onChange={this.handleChange}
            placeholder="First Name"/>
            <input 
            type="text" 
            name="lastName" value={this.state.lastName} 
            onChange={this.handleChange}
            placeholder="Last Name"/>
            <button>Submit</button>
            </form>
        </div>
    )
}
    }
    

export default App 