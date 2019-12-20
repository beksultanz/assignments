const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        console.log(JSONdata)
        const data = JSON.parse(JSONdata)
        const newData = data.objects[0].pokemon
        showData(newData)    
        
    }
}

function showData(arr) {
    for (let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}



