const name = "Tejas";
const repoCount = 50;

//console.log(name + repoCount + " Value"); //not recommend

console.log(`Hello my name id ${name} and my repo count is ${repoCount}`); // String interpolation

const gameName = new String('Tejas');

console.log(gameName[0]); // T

console.log(gameName.__proto__); // {}

console.log(gameName.length); // 5
console.log(gameName.toUpperCase()); // TEJAS
console.log(gameName.charAt(3)); // a

console.log(gameName.indexOf('j')); // 2

// substring method
const newString = gameName.substring(0,3);
console.log(newString); // Tej

// slice method
const anotherString = gameName.slice(-1,-3);
console.log(anotherString);


//trim method (works on whitespace)

const stringOne = "    Tejas     ";
console.log(stringOne); //     Tejas
console.log(stringOne.trim()); //Tejas
 

// replace
const url = "https://github.com/Tejas2410";

console.log(url.replace('24' , '29')); //https://github.com/Tejas2910


//includes (hai ya nhi string )
console.log(url.includes('sundar')); // false


// split

const stringTwo = "tejas-hello-hi";
console.log(stringTwo.split('-')); // [ 'tejas', 'hello', 'hi' ]