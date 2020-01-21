import React from "react"
import Pet from "./Pet"

const Friend = (props) => {
    const pets = props.pets.map((pet)=> {
       return <Pet name={pet.name} breed={pet.breed}/> 
    })

    return (
        <div className="container">
            <h1 className="ownerName">Name: {props.name}</h1>
            <h2 className="ownerAge">Age: {props.age}</h2>
        
            <div>
                {pets}
            </div>
        </div> 
    )
}

export default Friend