const superheroes = [
    "Superman",
    "Batman",
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Black Widow",
    "The Hulk",
    "Wolverine",
    "Wonder Woman"
  ];

  for(const num of superheroes){
    // console.log(num);

    
  }
const number = [1,2,3,4,5,6,7,8,9,10]

for (const numm of number) {
    // console.log(numm);
    
}

const hello = "Hellow world"

for (const h of hello) {
    // console.log(`Each character of ${h}`);

    
}


const map = new Map()
map.set('BD', 'Bangladesh')
map.set('US', 'United States')
map.set('CA', 'Canada')
map.set('IN', 'India')
map.set('AU', 'Australia')
map.set('UK', 'United Kingdom')
map.set('CN', 'China')
map.set('JP', 'Japan')
map.set('FR', 'France')
map.set('DE', 'Germany')

// console.log(map);

for (const keys of map) {
  console.log(keys);
  
}
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
  
}