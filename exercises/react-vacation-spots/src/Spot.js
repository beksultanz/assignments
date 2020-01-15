import React from "react"

const Spot = (props) => {
    return (
        <div className="box" style={{backgroundColor: props.product.timeToGo === "Spring" ? "#487eb0" : props.product.timeToGo === "Winter" ? "##dcdde1": props.product.timeToGo === "Summer" ? "#0fbcf9" : "#fbc531"}}>
        <h1 className= "price" style={{display: props.product.price < "500" ? "block" : "none"}}>$</h1>
        <h1 className= "price" style={{display: props.product.price < "1000" && props.product.price > "500" ? "block" : "none"}}>$$</h1>
        <h1 className= "price" style ={{display: props.product.price > "1000" ? "block" : "none"}}>$$$</h1>
        <h1>{props.product.place}</h1>
        <p className="cost">{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
        <p className="season">{props.product.timeToGo}</p>
        </div>
    )
}



export default Spot 