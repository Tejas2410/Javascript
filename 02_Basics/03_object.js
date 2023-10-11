// Singleton
//Object.create // constructor method k through

// object literals

const mySym = Symbol("key1"); // imp

const JsUser = {
    name : "Tejas",
    "full name" : "Tejas Patil",
    [mySym] : "myKey1", // square bracket in imp
    age: 22,
    location: "Pune",
    email: "tejas@google.com",
    lastLoginDays: ["Monday" , "Saturday"] 
}

console.log(JsUser.email); // tejas@google.com

console.log(JsUser["email"]); // key should be string // tejas@google.com

// console.log(JsUser.full name); // not possible
console.log(JsUser["full name"]); // Tejas Patil

console.log(JsUser[mySym]); // myKey1
console.log(typeof(mySym)); // symbol

JsUser.email = "rohit@gmail.com";
// Object.freeze(JsUser); // values won't change
JsUser.email = "sachin@gmail.com";
console.log(JsUser);
// o/p
// {
//     name: 'Tejas',
//     'full name': 'Tejas Patil',
//     age: 22,
//     location: 'Pune',
//     email: 'rohit@gmail.com',
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }


JsUser.greetings = function() {
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello JS user , ${this.name}`);
} 

console.log(JsUser.greetings); //[Function (anonymous)]
console.log(JsUser.greetings()); //Hello JS user

console.log(JsUser.greetingsTwo()); //Hello JS user , Tejas