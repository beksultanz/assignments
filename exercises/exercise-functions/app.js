//#1

function sum(num1, num2) {
	return num1 + num2;
}

console.log(sum(5, 9));

//#2

let arr = [5, 8, 10];
let largest = Math.max.apply(Math, arr);

console.log(largest);

// #3

function oddOrEven() {
	if (oddOrEven() % 2 === 0) {
		console.log("even");
	} else {
		console.log("odd");
	}
}
console.log(oddOrEven(5));

// #4 


// optional challenge 


