const readline = require('readline-sync');

const input = readline.question('What phrase would you like me to encrypt? ').toLowerCase()
const shift = parseInt(readline.question('How many letters would you like me to shift? '))

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let result = ""

function encrypt(input, shift){
    
    for(let i = 0; i < input.length; i++){
        if(alphabet.indexOf(input[i]) !== -1){
            let index = alphabet.indexOf(input[i])
            result = result + alphabet[(index + shift) % 26] 
        } else {
            result = result + input[i]
        }
    }
    return result
}

console.log(encrypt(input, shift))