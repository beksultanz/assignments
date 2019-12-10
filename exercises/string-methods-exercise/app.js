//#1

var greeting = "Hello"
var greeting2 = "Hello World"

// var greetingUppercase = greeting.toUpperCase()
// var greetingLowercase  = greeting.toLowerCase()

// var greetingUpperLowercase = greetingUppercase.concat(greetingLowercase)

// console.log(greetingUpperLowercase)

// //#2

// var findMiddleIndex = Math.floor(greeting.length/2)

// console.log(findMiddleIndex)

// var findMiddleIndex2 = Math.floor(greeting2.length/2)
// console.log(findMiddleIndex2)

// //#3 

// var returnFirstHalf = greeting.slice(0,2)
// console.log(returnFirstHalf)

// var returnFirstHalf2 = greeting2.slice(0,5)
// console.log(returnFirstHalf2)

//#4 

var toUppercase = greeting.slice(0, Math.floor(greeting.length/2)).toUpperCase()
var toLowercase = greeting.slice(Math.floor(greeting.length/2)).toLowerCase()
var toUppersaseLowercase = toUppercase.concat(toLowercase)

console.log(toUppersaseLowercase)

