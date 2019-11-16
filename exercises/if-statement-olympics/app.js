//preliminaries

if (5 > 3) {
	console.log("5 is greater than 3");
}
var animal = "cat";

if (animal.length === 3) {
	console.log("cat length is 3");
}

if ("cat" === "dog") {
	console.log("same");
} else {
	console.log("not the same");
}

//Bronze Medal

var person = {
	name: "Bobby",
	age: 12
};

if (person.age >= 18) {
	console.log(person.name + " is allowed to go to the movie");
} else {
	console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith("B")) {
	console.log(person.name + " is allowed to go to the movie");
} else {
	console.log(person.name + " is not allowed to go to the movie");
}

if (person.name.startsWith("B") && person.age > 18) {
	console.log(person.name + " is allowed to go to the movie");
} else {
	console.log(person.name + " is not allowed to go to the movie");
}

//Silver Medal

if (1 === "1") {
	console.log("strict");
} else if (1 == "1") {
	console.log("loose");
} else {
	console.log("not equal to all");
}

if (1 <= 2 && 2 === 4) {
	console.log("yes");
}

//Gold Medal

if (typeof "dog" == "string") {
	console.log("dog is " + typeof "dog");
}
