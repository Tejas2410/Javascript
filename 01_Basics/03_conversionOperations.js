let score = "33abc";

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //Number
console.log(valueInNumber); //NaN (Not a Number)

let score1 = null;

let valueInNumber1 = Number(score1);
console.log(typeof(valueInNumber1)); //Number
console.log(valueInNumber1); //In null case o/p is 0 
//in case of undefined o/p is NaN and for true o/p 1 , for false o/p false after converting to number


// "33" => 33
// "33ab" => NaN
// true => 1; false => 0


let isLoggedIn = 1; // "" in case of empty string => false , "Tejas" => true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "Tejas" => true



let someNumber = 33;

let stringnumber = String(someNumber);
console.log(typeof(stringnumber));
console.log(stringnumber);