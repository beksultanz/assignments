//Write a fuction that takes an array of numbers and returns the largest(without using Math.max())

let arr = [3, 5, 2, 8, 1];

arr.sort().reverse();

console.log(arr[0]);

//Write a fuction that takes an array of words and a character and return each word that has that letter present

let letterWithStrings = ["#3", "$$$", "C%4!", "Hey!"];

let wordsWithLetter = [];

function findLetter(arr, char) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(char)) {
			wordsWithLetter.push(arr[i]);
		}
	}
	return wordsWithLetter;
}

console.log(findLetter(letterWithStrings, "!"));

// Write a function that takes a num2 and returns whether num1 is divisible by num2

isDivisible(4, 2);

function isDivisible(num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));
