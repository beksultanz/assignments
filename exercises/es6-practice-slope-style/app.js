//#1

function collectAnimals(...animals) {  
    console.log(animals)
}


collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//#2 

const combineFruit = (fruit, sweets, vegetables) => ({fruit,
            sweets, 
            vegetables})
            

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]))



//#3 

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

  const {location, duration} = vacation
  
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence())

  //#4 

const items = [23, 24, 34] 
 function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(items))


  //#5 



const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [firstFav, secondFav, thirdFav, fourthFav, FifthFav] = favoriteActivities

const returnFavorites = arr => `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`

console.log(returnFavorites(favoriteActivities)) 

//#6 


function combineAnimals(...val) {  
    return val
}
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)) 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//#7 


const product = (a, b, c, d, e) => {  
    const numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }


  console.log(product(1,2,3,4,5))


  //#8  

  const array = []

  function unshift(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(array);
  }

  console.log(unshift(array,"boy", "girl", "man", "woman", "lady"))

