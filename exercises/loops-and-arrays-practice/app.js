// #1

let officeItems = [
	"stapler",
	"monitor",
	"computer",
	"desk",
	"lamp",
	"computer",
	"lamp",
	"stapler",
	"computer",
	"computer"
];

let count = 0;
for (let i = 0; i < officeItems.length; i++) {
	if (officeItems[i] == "computer") count++;
}

console.log(count);

// #2

let peopleWhoWantToSeeMadMaxFuryRoad = [
	{
		name: "Mike",
		age: 12,
		gender: "male"
	},
	{
		name: "Madeline",
		age: 80,
		gender: "female"
	},
	{
		name: "Cheryl",
		age: 22,
		gender: "female"
	},
	{
		name: "Sam",
		age: 30,
		gender: "male"
	},
	{
		name: "Suzy",
		age: 4,
		gender: "female"
	}
];


for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
	let person = peopleWhoWantToSeeMadMaxFuryRoad[i];
	let pronoun = person.gender === "male" ? "HE" : "SHE";
	let preposition = person.gender === "male" ? " HIM" : " HER";

	if (person.age >= 18) {
		console.log(
			person.name +
				" is old enough. " +
				pronoun +
				"'S" +
				" good to see Mad Max Fury Road"
		);
	} else {
		console.log(
			person.name +
				" is not old enough to see Mad Max Free Road, don't let " +
				preposition +
				" in"
		);
	}
}
