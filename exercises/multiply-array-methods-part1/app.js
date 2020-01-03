let peopleArray = [
	{
		firstName: "Sarah",
		lastName: "Palin",
		age: 47
	},
	{
		firstName: "Frank",
		lastName: "Zappa",
		age: 12
	},
	{
		firstName: "Rick",
		lastName: "Sanchez",
		age: 78
	},
	{
		firstName: "Morty",
		lastName: "Smith",
		age: 29
	},
	{
		firstName: "Kyle",
		lastName: "Mooney",
		age: 27
	},
	{
		firstName: "Pasha",
		lastName: "Datsyuk",
		age: 13
	},
	{
		firstName: "Lev",
		lastName: "Tolstoy",
		age: 82
	}
];

// function sortedOfAge(arr) {
// 	return arr.filter(function(val) {
//         if(val.age > 18) {
//            return val
//         }
//         let sorted = function(val(a,b){

//         })
//     })

// }

console.log(
	peopleArray.filter(person => person.age > 18).sort((a, b) => {return a.lastName > b.lastName;}).map(person => `<li> ${person.firstName} ${person.lastName} ${person.age}</li>`)
);


