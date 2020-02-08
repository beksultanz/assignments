import React from "react" 
import axios from "axios"

class List extends React.Component {
    constructor() {
        super() 
        this.state = {
            list: []
        }
    }

        componentDidMount() {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => {
                 this.setState({
                    list: response.data
                })
            })
            
        }

        render() {
            const mappedData = this.state.list.map((person) => {
                return (
                <div className="container" key={person.name}> 
                    <h3 className="name">{person.name}</h3>
                    <img className="img" src={person.image} alt="don"/>
                </div>
                )
            })
           return (
            <div> 
                <h1>{mappedData}</h1>
            </div>
        ) 
        }
        
    }

export default List 