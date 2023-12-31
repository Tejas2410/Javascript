// Primitive 

// 7 types : String , Number , Boolean , null(khali/empty) ,undefined (variable declare kiya hai aur value nhi dala hai),
//           Symbol (value ko unique banane k liye) , BigInt (scientific value jo number me handle nhi ho rhi hai).


const score = 100;
const scorevalue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);// false (both are unique)


const bigNumber = 172637177872781848477636n; // BigInt

// Non primitive (Reference)

// Arrays , Objects, Functions 

const hereos = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name: "Tejas",
    age: 22
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof(bigNumber));
// console.log(typeof(outsideTemp)); // object (null ka typeof object aata hai)
// console.log(typeof(myFunction)); // function (also called as function object)

// type of non primitives are object

// console.log(typeof(id)); // symbol ka type symbol hai


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Refer Image 1
//Stack (Primitive) will get copy of variable stored in stack, 
//Heap (Non-Primitive) will get reference (variable will be stored in stack and will point to heap where actual object data is stored)

let myYoutubeName ="Tejasvlog";

let anothername = myYoutubeName;
anothername = "Tejasvines"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Tejas@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);