// #1 

let square = document.getElementById("square")

square.addEventListener("mouseover", function (event) {
    square.style.backgroundColor = "blue" 
})

square.addEventListener("mouseout", function (event) {
    square.style.backgroundColor = "blanchedalmond"
}) 

//#2

square.addEventListener("mousedown", function (event) {
    square.style.backgroundColor = "red" 
}) 

//#3 

square.addEventListener("mouseup", function (event) {
    square.style.backgroundColor = "yellow" 
}) 


square.addEventListener("dblclick", function (event) {
    square.style.backgroundColor = "green" 
}) 

square.addEventListener("dblclick", function (event) {
    square.style.backgroundColor = "orange" 
}) 

addEventListener("wheel", function (event) {
    square.style.backgroundColor = "orange" 
}) 