let score = "33abc";

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber)); //Number
// console.log(valueInNumber); //NaN (Not a Number)

let score1 = null;

let valueInNumber1 = Number(score1);
// console.log(typeof(valueInNumber1)); //Number
// console.log(valueInNumber1); //In null case o/p is 0 
//in case of undefined o/p is NaN and for true o/p 1 , for false o/p false after converting to number


// "33" => 33
// "33ab" => NaN
// true => 1; false => 0


let isLoggedIn = 1; // "" in case of empty string => false , "Tejas" => true

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggedIn));
// console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "Tejas" => true



let someNumber = 33;

let stringnumber = String(someNumber);
// console.log(typeof(stringnumber));
// console.log(stringnumber);


//*****************************************Operation************************************************************** */


let value = 3;
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
//console.log(2%3); // 2

let str1 = "Hello";
let str2 = " Tejas";

let str3 = str1 + str2;
// console.log(str3); // Hello Tejas

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12

// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2"); //32


// console.log( (3 + 4) * 5 % 3); // 2

// console.log(true); // true

// not recommended line
// console.log(+true); // 1 // conversion to num
// console.log(+""); //0

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

// recommended

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log();

// Postfix operation
let i = 10;
let j = i++;

console.log(i + " " + j); // i = 11 j =  10

// Prefix operation
let x = 10;
let y = ++x;

console.log(x + " " + y); // x = 11 j = 11










