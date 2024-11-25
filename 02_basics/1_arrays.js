// Array

const myArray = [0, 1, 2, 3, 4, 5]


myArray.push(6, 7, 8, 9)
myArray.pop()

// myArray.unshift(9)
// myArray.shift()
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(8));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

console.log("A ", myArray);
const myA1 = myArray.slice(1,4)
console.log(myA1);
console.log("after slice ",myArray);

const myA2 = myArray.splice(1,4)
console.log(myA2);

console.log("after splice ", myArray);



