// array
const myArr = [0 , 1 , 2 , 3 ,4 , 5 , true , "Tejas"];
const myHeors = ["shaktiman" , "naagraj"];

const myArr2 = new Array(1 , 2 , 3 , 4);

console.log(myArr[1]);


//Shallow copy and Deep copy
//https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy



// Array methods

myArr.push(6);
console.log(myArr); // add 6 at end of array

myArr.pop();
console.log(myArr); // romove 6 from end of array

myArr.unshift(9);
console.log(myArr); // add 9 at start of array

myArr.shift();
console.log(myArr); // remove 9 from start of array

console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(9)); // -1 (value not exists)

const newArr = myArr.join(); // adds all the elements of array into a string
console.log(newArr);
console.log(typeof(newArr)); // string

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 , 3); // returns section of array 
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1 , 3); // delete element of index 1 to index 2 in main array
console.log(myn2);
console.log("C ", myArr);


