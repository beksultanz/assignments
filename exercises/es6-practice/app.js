//#1 
const petOwner = "John"
let name = "animal"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

/// #2



const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }


let mapVegetables = (arr) => arr.map((carrot) => { 
    return {type: "carrot", name: carrot}
})

    console.log(mapVegetables(carrots))


    ///#3


    const people = [
        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "Luigi",
            friendly: true
        },
        {
            name: "Mario",
            friendly: true
        },
        {
            name: "Bowser",
            friendly: false
        }
    ]
    
    // function filterForFriendly(arr) {
    //     return arr.filter(function(person) {
    //         return person.friendly
    //     })
    // }
    

    const filterForFriendly = arr => arr.filter(person => person.friendly)
    
    console.log(filterForFriendly(people))


    //#4 


    // function doMathSum(a, b) {
    //     return a + b
    // }
    
    // var produceProduct = function(a, b) {
    //     return a * b
    // }


     const doMathSum = (a,b) => a + b 

     const produceProduct = (a,b) => a*b 

     console.log(doMathSum(5,5))

     console.log(produceProduct(5,5))



     //#5 

     const printString = (fName, lName, age) => `Hi ${fName} ${lName}, how does it feel to be ${age}?` 

     console.log(printString("Jane", "Doe", 100))


     //#6 
     
     const animals = [
        {
            type: "dog",
            name: "theodore"
        },
        {
            type: "cat",
            name: "whiskers"
        },
        {
            type: "pig",
            name: "piglette"
        },
        {
            type: "dog",
            name: "sparky"
        }
     ];
     
    //  function filterForDogs(arr) {
    //      return arr.filter(animal => {
    //          if (animal.type === "dog") {
    //              return true
    //          } else {
    //              return false
    //          }
    //      })
    //  }

     const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog") ? true:false )

    console.log(filterForDogs(animals))



    //#6 

    const greetingMessage = (location, name) => ` Hi ${name}! \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

    console.log(greetingMessage("Hawaii", "Janice")) 