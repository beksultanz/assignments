//#1 
// const arr = [2, 5, 100]
// const doubleNumbers = arr.map(num => num * 2) 

// console.log(doubleNumbers)  

function doubleNumbers(arr){
    return arr.map(function (val){
        return val * 2
    })
  }
  
  console.log(doubleNumbers([2, 5, 100])); 

//#2 

function stringItUp(arr){
     return arr.map(function(val) {
        return val + ""
    })
  }
  
  console.log(stringItUp([2, 5, 100])); 
  

//#3 

function capitalizeNames(arr) {
    return arr.map(function(name) {
        return name[0].toUpperCase() + name.slice(1).toLowerCase()
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//#4 

function namesOnly(arr){
    return arr.map(function (person) {
        return person.name
    })
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

  //#5

  function makeStrings(arr){
    return arr.map(function(allowed){
            if (allowed.age > 50){
            return allowed.name + " can go to The Matrix"
        } else {
            return allowed.name + " is under age!!"
        }
    })
  }

  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));

  //#6 

  function readyToPutInTheDOM(arr){
        return arr.map(function (val) {
            return "<h1>" + val.name + "</h1>" + "<h2>" + val.age + "</h2>"
        })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

