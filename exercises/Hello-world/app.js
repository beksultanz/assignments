// Instruction | Given function
let sayHello = function() {
	console.log("hello class");
};

/* ========== Task level one ========== */

// Call the function
sayHello();

// Change this function expression to a function declaration
function sayHello() {
	console.log("hello class");
}

/* ========== Task level two ========== */

//Give the function a name parameter

function sayHello(name) {
	return "Hello " + name + "!";
}

//Pass the function call a string (preferably a name) as an argument.

console.log(sayHello("Ali"));

/* ========== Task level three ========== */

function sayHello(name, age) {
	return "Hello " + name + ", how do you like being " + age + "?";
}

sayHello("Ali", 27);
