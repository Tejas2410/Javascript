const marvel_heroes = ["Ironman" , "Spiderman" , "Thor"];
const dc_heroes = ["superman" , "flash" , "batman"]

// marvel_heroes.push(dc_heroes); // will take dc_heroes array as element on idx 3
// console.log(marvel_heroes); // [ 'Ironman', 'Spiderman', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); // flash

//concat
// let allHeroes = marvel_heroes.concat(dc_heroes); //Combines two arrays returns a new array
// console.log(allHeroes); //[ 'Ironman', 'Spiderman', 'Thor', 'superman', 'flash', 'batman' ]

//spread

let allNewHeroes = [...marvel_heroes , ...dc_heroes]; //combies multiple arrays and retuen new array
console.log(allNewHeroes);//[ 'Ironman', 'Spiderman', 'Thor', 'superman', 'flash', 'batman' ]

let another_array = [1 , 2 , 3 , [5 , 6 , 7], 8 , 9 , [10 , [11 , 3 ,7], 19]];

const real_another_array = another_array.flat(Infinity);//Returns a new array with all sub-array concatenated. // infinity means all deapth inside array
console.log(real_another_array); 
//  [
//     1, 2,  3,  5, 6, 7,
//     8, 9, 10, 11, 3, 7,
//    19
//  ]


console.log(Array.isArray("Tejas")); // false
console.log(Array.from("Tejas")); // covert into Array // [ 'T', 'e', 'j', 'a', 's' ]

console.log(Array.from({name : "Tejas"})); // [] // couldn't covert into array // interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3)); //[ 100, 200, 300 ]


