
//1a,1b

function sum(x, y) {

    if (typeof x !== "number" || typeof y !== "number") {
        throw "Hey I am am an error"
    }
    return x + y;
  }   

  try { 
    sum(1,2)
  }
  
  catch(err) {
    console.log(err)
  }


  //2a, 2b 

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username !== user.username && password !== user.password) {
    throw "Your data does not match, Try again!"
  }
  console.log("login successful")
}

try {
  // login("sam", "123abc")
  login("sem", "123abf")
}

catch(err) {
  console.log(err)
}