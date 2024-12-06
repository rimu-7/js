const userEmail = []

if (userEmail) {
    console.log("Got the email");
    
} else {
    console.log("don't have email");
    
}
//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// if the string is not empty, inside the strings everything is truthy value, 
// "0", " ", 'false', []. {}, function(){}

// if (userEmail.length === 0) {
//     console.log("empty arrary");
    
// }
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("empty object");
    
// }


//Nullish Coalescing operator (??): null, undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 5
val1 = undefined ?? 5


// console.log(val1);


isPrice = 100

isPrice <= 80 ? console.log("more than 80") : console.log("Less than 80");

