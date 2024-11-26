const tinderUser = {}

tinderUser.id = "123asd"
tinderUser.name = "jesse"
tinderUser.isLoggedin = false
// console.log(tinderUser);


const regularUser = {
    email: "dwfiuwyug@gfhbg.com",
    userNmae : "Jesse",
    fullName: {
        userFullName:{
            firstName: "Jesse",
            lastName: "Bhai",
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
const obj4 = {7:"g", 8:"h"}

// const add = Object.assign({}, obj1,obj2,obj3,obj4)

const add = {...obj1, ...obj2, ...obj3, ...obj4}

// console.log(add);


const localUser = [
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
    {
        id:12,
        emial:"dufhuhg@dfhb.com",
    },
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


