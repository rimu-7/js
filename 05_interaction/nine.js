const nums = [1, 2, 3, 4];

// const totalVal = nums.reduce(function(acc, curval){
//     console.log(`accumulator: ${acc} and currentvalue: ${curval}`);

//     return acc + curval;
// },0)

const totalVal = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(totalVal);

let courses = [
  {
    itemName: "Python Programming",
    price: 299
  },
  {
    itemName: "Data Science with R",
    price: 399
  },
  {
    itemName: "Web Development with JavaScript",
    price: 499
  },
  {
    itemName: "Digital Marketing",
    price: 199
  },
  {
    itemName: "Photography Masterclass",
    price: 149
  },
  {
    itemName: "Cybersecurity Fundamentals",
    price: 249
  },
  {
    itemName: "Spanish Language Course",
    price: 99
  },
  {
    itemName: "Artificial Intelligence with Python",
    price: 599
  },
  {
    itemName: "Graphic Design with Adobe Creative Suite",
    price: 399
  },
  {
    itemName: "Project Management with Agile",
    price: 349
  }
];

const toPay = courses.reduce( (acc, item) => acc + item.price, 0)
console.log(toPay)
