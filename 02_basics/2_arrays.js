const marvel_heros = ["iron-man", "Thor", "Hulk", "Spider-man"]

const dc_heros = ["Super-man", "bat-man", "flash"]
// console.log(marvel_heros);
// marvel_heros.push(dc_heros)
// console.log("after pushing", marvel_heros);
const ok = marvel_heros.concat(dc_heros)
// console.log(ok);
const new_uni = [...marvel_heros, ...dc_heros]
// console.log(new_uni);
let okk = [1,2,3,4,5, [6,7,8],6,7,8,9,[10,11,12, [13,14,15, [,16,17,18]]]]
// console.log(okk);
let flatok = okk.flat(Infinity)
// console.log(flatok);

console.log(Array.isArray("Fuad"))
console.log(Array.from("Fuad"))
console.log(Array.from({name: "Fuad"}));

let a = 100
let b = 200
let c = 300
let d = "fuad"

console.log(Array.of(a, b, c, d));
