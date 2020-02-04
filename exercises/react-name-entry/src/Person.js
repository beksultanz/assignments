import React from "react"

const Person = (props) => {
    return (
        <li> 
            {props.firstName}   {props.lastName}
        </li>
    )
}

export default Person 