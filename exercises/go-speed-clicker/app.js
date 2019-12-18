
const displayCount = document.getElementById("container")
const incrementButton = document.getElementById("increment")


let count = 0

//retrieves data from the local storage 
count = localStorage.getItem('num')
displayCount.textContent = count


// function, when it clicks it increments the number of clicks made 
incrementButton.addEventListener("click", (event) => {
    event.preventDefault()
    count++;
    displayCount.textContent = count;
    localStorage.setItem("num", count);
    const savedNum = localStorage.getItem("num");
    return savedNum
})



