const programmingLanguages = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "PHP",
  "Go",
  "Rust",
];

// const value = programmingLanguages.forEach((language) => {
//     console.log(language);
//     return language;
// })

// console.log(value); // undefined

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const filteredNum = myNum.filter((num) => {
  return num > 5;
});

// console.log(filteredNum);

let newNum = [];
myNum.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});
// console.log(newNum);

let books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishDate: 1960,
    edition: "First Edition",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishDate: 1949,
    edition: "Second Edition",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishDate: 1813,
    edition: "Third Edition",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishDate: 1954,
    edition: "First Edition",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publishDate: 1951,
    edition: "Fiftieth Anniversary Edition",
  },
];

const userBooks = books.filter((bk) => bk.genre === "Fantasy");
const publishYear = books.filter((year) => {
  return year.publishDate >= 1950 && year.genre === "Fantasy"
});
console.log(publishYear);

// console.log(userBooks);
