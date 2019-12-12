//# 1
function fiveAndGreaterOnly(arr) {
	return arr.filter(function(val) {
		if (val >= 5) {
			return val;
		}
	});
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//#2

function evensOnly(arr) {
	return arr.filter(function(even) {
		if (even % 2 === 0) {
			return even;
		}
	});
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//#3

function fiveCharactersOrFewerOnly(arr) {
	return arr.filter(function(val) {
		if (val.length <= 5) {
			return val;
		}
	});
}
// test
console.log(
	fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]

//#4

function peopleWhoBelongToTheIlluminati(arr) {
	return arr.filter(function(club) {
		if (club.member === true) {
			return club;
		}
	});
}
// test
console.log(
	peopleWhoBelongToTheIlluminati([
		{ name: "Angelina Jolie", member: true },
		{ name: "Eric Jones", member: false },
		{ name: "Paris Hilton", member: true },
		{ name: "Kayne West", member: false },
		{ name: "Bob Ziroll", member: true }
	])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

//#5

function ofAge(arr) {
    return arr.filter(function(val){
        if(val.age > 50) {
            return val
        }
    })
}
    
console.log(
	ofAge([
		{ name: "Angelina Jolie", age: 80 },
		{ name: "Eric Jones", age: 2 },
		{ name: "Paris Hilton", age: 5 },
		{ name: "Kayne West", age: 16 },
		{ name: "Bob Ziroll", age: 100 }
	])
);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
