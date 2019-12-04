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

let messages = document.getElementsByClassName("message");

let messageOne = (messages[0].textContent = "you're awesome");
let messageTwo = (messages[1].textContent = "nice to meet you");
let messageThree = (messages[2].textContent = "that sounds great");
let messageFour = (messages[3].textContent = "have a good one");
console.log((messages[0].textContent = "you're awesome"))

let clear = document.getElementById("clear-button");

clear.addEventListener("click", function(e) {
	document.querySelector(".messages").textContent = " ";
});

//Silver

let messageLeft = document.getElementsByClassName("message left");
let messageRight = document.getElementsByClassName("message right");

console.log(messageLeft);

document
	.getElementById("theme-drop-down")
	.addEventListener("change", function(e) {
		// console.log(e.target.value);
		if (e.target.value === "theme-one") {
			messageLeft[0].style.backgroundColor = "blue";
			messageLeft[1].style.backgroundColor = "blue"; 
			messageRight[0].style.backgroundColor = "brown"; 
			messageRight[1].style.backgroundColor = "brown"; 
		} else if(e.target.value === "theme-two") {
			messageLeft[0].style.backgroundColor = "red";
			messageLeft[1].style.backgroundColor = "red"; 
			messageRight[0].style.backgroundColor = "black"; 
			messageRight[1].style.backgroundColor = "black"; 
		} 
	});

// let dropDown = document.getElementById("theme-drop-down");
// dropDown.addEventListener("change", function(e) {
// 	if (e.target.value === "theme-one") {
// 		for (let message of messages) {
// 			if (message.classList.contains("theme-two")) {
// 				message.classList.replace("theme-two", "theme-one");
// 			}

// 			message.classList.add("theme-one");
// 		}
// 	} else if (e.target.value === "theme-two") {
// 		for (let message of messages) {
// 			if (message.classList.contains("theme-one")) {
// 				message.classList.replace("theme-one", "theme-two");
// 			}
// 			message.classList.add("theme-two");
// 		}
// 	}
// });
