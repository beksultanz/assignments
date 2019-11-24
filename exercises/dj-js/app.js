// #1

let square = document.getElementById("square");

square.addEventListener("mouseover", function(event) {
	square.style.backgroundColor = "blue";
});

square.addEventListener("mouseout", function(event) {
	square.style.backgroundColor = "blanchedalmond";
});

//#2

square.addEventListener("mousedown", function(event) {
	square.style.backgroundColor = "red";
});

//#3

square.addEventListener("mouseup", function(event) {
	square.style.backgroundColor = "yellow";
});

square.addEventListener("dblclick", function(event) {
	square.style.backgroundColor = "green";
});

square.addEventListener("dblclick", function(event) {
	square.style.backgroundColor = "orange";
});

window.addEventListener("wheel", function(event) {
	square.style.backgroundColor = "orange";
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 66) {
		square.style.backgroundColor = "blue";
	}
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 82) {
		square.style.backgroundColor = "red";
	}
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 89) {
		square.style.backgroundColor = "yellow";
	}
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 71) {
		square.style.backgroundColor = "green";
	}
});
window.addEventListener("keydown", function(event) {
	if (event.keyCode === 79) {
		square.style.backgroundColor = "orange";
	}
});
