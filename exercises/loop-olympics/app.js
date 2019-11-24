// //Preliminaries

// // #1
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// // #2

// for (let i = 9; i >= 0; i--) {
// 	console.log(i);
// }

// // #3
// let fruit = ["banana", "orange", "apple", "kiwi"];

// for (let i = 0; i < fruit.length; i++) {
// 	console.log(fruit[i]);
// }

// //Bronze Medal
// // #1

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr.push(i);
// }

// console.log(arr);

// // #2

// for (let i = 0; i < 101; i = i + 2) {
// 	console.log(i);
// }

// // let arr2 = [ ]
// // for (let i = 0; i < 100; i++) {
// //     if(i % 2 === 0) {
// //      arr2.push(i);
// // }

// // }
// // console.log(arr2)

// // #3

// let fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// let resultArr = [];
// for (let i = 0; i < fruits.length; i = i + 2) {
// 	if (i % 2 === 0);
// 	resultArr.push(fruits[i]);
// }
// console.log(resultArr);

// //Silver Medal

// let peopleArray = [
// 	{
// 		name: "Harrison Ford",
// 		occupation: "Actor"
// 	},
// 	{
// 		name: "Justin Bieber",
// 		occupation: "Singer"
// 	},
// 	{
// 		name: "Vladimir Putin",
// 		occupation: "Politician"
// 	},
// 	{
// 		name: "Oprah",
// 		occupation: "Entertainer"
// 	}
// ];

// // #1

// for (let i = 0; i < peopleArray.length; i++) {
// 	console.log(peopleArray[i].name);
// }

// // #2

// let arrName = [];
// let arrOccupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
// 	arrName.push(peopleArray[i].name);
// }
// console.log(arrName);

// for (let i = 0; i < peopleArray.length; i++) {
// 	arrOccupations.push(peopleArray[i].occupation);
// }
// console.log(arrOccupations);

// //#3
// let arrName2 = [];
// let arrOccupations2 = [];

// for (let i = 0; i < peopleArray.length; i = i + 2) {
// 	if (i % 2 === 0) {
// 		arrName2.push(peopleArray[i].name);
// 	}
// }

// console.log(arrName2);

// for (let i = 0; i < peopleArray.length; i++) {
// 	if (i % 2 !== 0) {
// 		arrOccupations2.push(peopleArray[i].occupation);
// 	}
// }

// console.log(arrOccupations2);

// Gold Medal
//#1

// let arr = [];
// let innerArr = [];

// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		innerArr.push(0);

// 		if (innerArr.length === 3) {
// 			arr.push(innerArr);
// 			innerArr = [];
// 		}
// 	}
// }

// console.log(arr);

// //#2

// let array = [];
// let innerArray = [];

// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++) {
// 		innerArray.push(i);

// 		if (innerArray.length === 3) {
// 			array.push(innerArray);
// 			innerArray = [];
// 		}
// 	}
// }

// console.log(array);


//#3

let array = [];
let innerArray = [];

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		innerArray.push(j);

		if (innerArray.length === 3) {
			array.push(innerArray);
			innerArray = [];
		}
	}
}

console.log(array);