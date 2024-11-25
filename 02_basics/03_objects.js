//objects

const mySym = Symbol("key1")

const JsUser = {
    name: "jesse",
    fullname: "Jesse bhai",
    [mySym]:"key1",
    age: 24,
    email: "jessebhai189@gmail.com",
    isLoggedin: false,
    location: "changchun",
    lastLoggesindays: ["Monday", "Tuesday"],
}

// console.log(JsUser.fullname);
// console.log(JsUser.email);
// console.log(JsUser.isLoggedin);
// console.log(JsUser.lastLoggesindays);
// console.log(JsUser[mySym]);
// console.log(typeof[mySym]);

JsUser.email="jessevodai.cust.com"
// Object.freeze(JsUser)

console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user.");
    
}
JsUser.greetingstwo = function(){
    console.log(`hello JS user, ${this.fullname}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());

