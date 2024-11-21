// Primitive

//7 types: String, Number, Boolean, null, undefine, symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

let bigNumber = 63457823475683746578345783478n

const heros = ['iron-man', 'thor', 'batman', 'superman', 'hulk']

let myObj = {
    name: 'fuad',
    age: '22',
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof anotherId);




// Reference (Non primitive)
//Aray, Objects, Functions