import React from "react"

const Badges = (props) => {
    let {firstName, lastName, email, placeOfBirth, phone, favFood, info } = props
    
    return (
        <div> 
            <p className="text">Name: {firstName} {lastName}</p>
            <p className="text">Place of Birth: {placeOfBirth}</p>
            <p className="text">Phone Number: {phone}</p>
            <p className="text">Email: {email}</p>
            <p className="text">Favorite food: {favFood}</p>
            <p className="text">info: {info}</p>
        </div>
    )
}

export default Badges