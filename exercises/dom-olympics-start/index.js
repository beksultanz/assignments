///Preliminaries


// <h1></h1>
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");

// <h1>JavaScript Made This!!</h1>
h1.textContent = "JavaScript Made This!!";

// <h1 class="header">JavaScript Made This!!</h1>
h1.className = "header";

h2.className = "sub-title";
h2.innerHTML = "<span>Sultan</span> wrote the JavaScript";

document.getElementById("header").appendChild(h1);

document.getElementById("header").appendChild(h2);


//Bronze 

let messages = document.getElementsByClassName("message")

messages[0].textContent = "you're awesome";
messages[1].textContent = "nice to meet you"
messages[2].textContent = "that sounds great"
messages[3].textContent = "have a good one"


