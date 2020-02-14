import React from "react"
import Card from "./Card"

const App = () => {
    return (
        <div> 
            <Card cardColor="red" height={200} width={200}/>
            <Card cardColor="purple" height={200} width={200}/>
            <Card cardColor="green" height={200} width={200}/>
        </div>
    )
}

export default App 