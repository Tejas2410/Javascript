/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

const accountId = 144553;
let accountEmail = "tejas@gmail.com";
var accountPassword = "12345"; // not used (doesn't understand scope)
accountCity = "Pune";
let accountState; // undefined

//accountId = 111; // not allowed

accountEmail = "rohit@gmail.com";
accountPassword = "Mumbai";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

