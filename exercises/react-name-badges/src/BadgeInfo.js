import React from "react" 
import Badges from "./Badges"

function BadgeInfo(props) {
    const mappedBadges = props.badges.map((badge, item) => <Badges key={item + badge.firstName} 
        firstName={badge.firstName}
        lastName={badge.lastName}
        placeOfBirth={badge.placeOfBirth}
        phone={badge.phone}
        email={badge.email}
        favFood={badge.favFood}
        info={badge.info}/>)
    
    return (
        <div className="badges">
            {mappedBadges}
        </div>
    )
}
  
export default BadgeInfo