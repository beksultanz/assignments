const { question } = require("readline-sync"); // ES6
// const question = require('readline-sync').question; ES5

let userName = question("What is your name? ");
console.log("Hi " + userName + "!");

// ask the user for two numbers
//ask the user for an operation type

let num1 = parseInt(question(userName + ", Please enter your first number ", {
    hideEchoBack: true
}));
let num2 = parseInt(question("Please enter your second number ", {
    hideEchoBack: true
}));
let operation = question("Please choose one of these operations: +, -, *, /  ");

let add = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

if (operation === "+") {
	console.log("Your result is " + add);
}

if (operation === "-") {
	console.log("Your result is " + subtract);
}
if (operation === "*") {
	console.log("Your result is " + multiply);
}
if (operation === "/") {
	console.log("Your result is " + divide);
}
