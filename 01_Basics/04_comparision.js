// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// not recommended comparing 2 different datatypes
// console.log("2" > 1); // true (automatically convert string to number)
// console.log("02" > 1); // true


// console.log(null > 0); // false
// console.log(null == 0); // false (this equality check will work differently)
// console.log(null >= 0); // true (this comparision will convert null to number)

// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined < 0); // false


// === strictly check (also check data type)

console.log("2" === 2); // false (datatype is different)
