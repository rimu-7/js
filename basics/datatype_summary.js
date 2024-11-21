// Primitive

//7 types: String, Number, Boolean, null, undefine, symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

let bigNumber = 63457823475683746578345783478n

const heros = ['iron-man', 'thor', 'batman', 'superman', 'hulk']

let myObj = {
    name: 'fuad',
    age: '22',
}

const myFunction = function(){
    console.log("Hello world");
    
}

// console.log(typeof bigNumber);
// console.log(typeof anotherId);




// Reference (Non primitive)
//Aray, Objects, Functions

// stack(primitive)  heap(non primitive)
// all the primitive is going to the stack(numbers, boolean)
//all the array, objects, functions going to the heaps


let myName = "Fuad"
let chineseName = myName

chineseName = "fu yuan"

console.log(myName);
console.log(chineseName);


let user1 = {
    name: 'fuad',
    email: 'fuad@proton.me',
}

let user2 = {
    name: 'jesse',
    email: 'jessebhai7@gmail.com'
}

user2.name = 'rimu'

console.log(user1.name);
console.log(user2.name);
