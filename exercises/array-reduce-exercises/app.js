//#1

function total(arr) {
	return arr.reduce(function(final, num) {
		final += num;
		return final;
	});
}

console.log(total([1, 2, 3])); // 6

//#2

function stringConcat(arr) {
	return arr.reduce(function(final, num) {
		const result = final + num
			return result
	});
	
}

console.log(stringConcat([1, 2, 3])); // "123"

//#3

function totalVotes(arr) {
	return arr.reduce(function(final, person) {
		if (person.voted === true) {
			final++;
		}
		return final;
	}, 0);
}

var voters = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7

//#4

function shoppingSpree(arr) {
	return arr.reduce(function(final, wish) {
		final = final + wish.price;
		return final;
	},0);
}

var wishlist = [
	{ title: "Tesla Model S", price: 90000 },
	{ title: "4 carat diamond ring", price: 45000 },
	{ title: "Fancy hacky Sack", price: 5 },
	{ title: "Gold fidgit spinner", price: 2000 },
	{ title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

///#5

function flatten(arr) {
	return arr.reduce(function(final, together) {
		final = final.concat(together);
		return final;
	});
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//#6

var voters = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false }
];

function voterResults(arr) {
	return arr.reduce(
		function(final, person) {
			const people = function(person, min, max) {
				return person.age > min && person.age < max;
			};

			if (people(person, 18, 26)) {
				final.youth++;
				if (person.voted) {
					final.youngVotes++;
				}
			} else if (people(person, 25, 36)) {
				final.mids++;
				if (person.voted) {
					final.midVotes++;
				}
			} else if (people(person, 35, 56)) {
				final.olds++;
				if (person.voted) {
					final.oldVotes++;
				}
			}
			return final;
		},
		{ youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 }
	);
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
