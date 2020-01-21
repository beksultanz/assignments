import React from "react"
import friends from "./friendData"
import Friend from "./Friend"


const FriendList = () => {
   const friendData = friends.map((friend, item)=> {
        return <Friend key={item + friend.name} name={friend.name} age ={friend.age} pets={friend.pets}/>
    })
    return (
        <div>
            {friendData}
        </div>
    )
}

export default FriendList 