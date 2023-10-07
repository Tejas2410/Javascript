const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance); // 100

// console.log(balance.toString().length); // 3

// console.log(typeof(balance)); // object

// console.log(balance.toFixed(2)); // 100.00 (limit to 2 decimal points)

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3)); // precise value of first 3 digit // 23.9

// console.log(otherNumber.toPrecision(2)); // precise value of first 2 digit // 24

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-IN')); // Indian Standard // 10,00,00,000


//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); // negative value to poasitive // 4
// console.log(Math.round(7.4)); // 7
// console.log(Math.ceil(7.2)); // 8
// console.log(Math.floor(7.9)); // 7
// console.log(Math.min(3, 2, 4, 5)); // 2
// console.log(Math.max(3 , 5, 7 ,2));// 7

console.log(Math.random()); // random value between 0 and 1 // 0.598532406627498
console.log(Math.random() * 10); // 7.055698999406648 (decimal point with shift towards right) (for values greater than 1)
console.log(Math.random() * 10); // 0.5794403356018418 (worst case scenario 0.05.....)
console.log(Math.floor((Math.random() * 10) + 1)); // To avoid this add 1 // 5


const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * max - min + 1)) + min ); // random value between 10 and 20 // 18

