import React from "react"


const Pet = (props) => {
    return (
        <div>
            <h3 className="petName">Pet: {props.name}</h3>
            <h3 className="petBreed">Breed: {props.breed}</h3>
        </div>
    )
}

export default Pet