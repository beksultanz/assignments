import React from "react"
import Spot from "./Spot"
import vacationSpots from "./vacationSpots"

const App = () => {
const spotsData = vacationSpots.map((spot) => {
    return <Spot key={spot.item} product={spot}/>
})
    return (
        <div>
            {spotsData}
        </div>
    )
}

export default App 