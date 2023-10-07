// dates

const myDate = new Date();
console.log(myDate); //2023-10-06T09:45:41.742Z

console.log(myDate.toString()); // Fri Oct 06 2023 09:46:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Oct 06 2023
console.log(myDate.toLocaleString());//10/6/2023, 9:49:05 AM
console.log(myDate.toLocaleDateString());// 10/6/2023
console.log(myDate.toISOString()); // 2023-10-06T09:50:12.339Z
console.log(myDate.toJSON()); // 2023-10-06T09:50:12.339Z

myDate.toLocaleString('Default' , {
    weekday: "long"
})
//Internizaltion -> Default (kind of standard of time)


console.log(typeof(myDate)); // object

// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3); // year , month , date , hour , min
//console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate1 = new Date("01-04-2023");//mmddyyyy
console.log(myCreatedDate1.toLocaleString());//1/4/2023, 12:00:00 AM .. 
console.log(myCreatedDate1.getMonth() + 1); // 1
console.log(myCreatedDate1.getDay());




// Time stamp

let timeStamp = Date.now();
console.log(timeStamp); // 1696601231781 // from 1 jan 1970 in milliseconds

console.log(myCreatedDate1.getTime()); // 1672790400000 in milliseconds

// in seconds
console.log(Math.floor(myCreatedDate1.getTime() / 1000)); // 1672790400




