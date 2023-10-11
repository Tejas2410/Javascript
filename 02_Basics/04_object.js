
//both are same
const  tinderUser = new Object();
console.log(tinderUser); // {}

const tinderUser2 = {};
console.log(tinderUser2);// {} 


tinderUser.id = "123abc";
tinderUser.name = "Tejas";
tinderUser.isLoggedIn = false;

console.log(tinderUser);//{ id: '123abc', name: 'Tejas', isLoggedIn: false }

const regularUser = {
    email: "tejas@google.com",
    fullname: {
        userfullname: {
            firstname: "Tejas",
            lastname: "Patil"
        }
    }
}

console.log(regularUser); //   email: 'tejas@google.com',
                            // fullname: { userfullname: { firstname: 'Tejas', lastname: 'Patil' } }
console.log(regularUser.fullname); //{ userfullname: { firstname: 'Tejas', lastname: 'Patil' } }

console.log(regularUser.fullname.userfullname.firstname); // Tejas


// combining object

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"};
const obj3 = {5: "e" , 6: "f"};

const obj4 = {obj1 , obj2}; // obj k andar obj aayega not recommended
console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj5 = Object.assign({} , obj1 , obj2 , obj3); // {} is target and other objects are source.
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// spread operator (recommended)

const obj6 = {...obj1, ...obj2};
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "tejas@google.com"
    },
    {
        id: 1,
        email: "rohit@google.com"
    },
    {
        id: 1,
        email: "tejas@google.com"
    }
]

console.log(users[1].email);//rohit@google.com

console.log(tinderUser); // { id: '123abc', name: 'Tejas', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] // output keys is in array
console.log(Object.values(tinderUser));// [ '123abc', 'Tejas', false ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Tejas' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Destructuring of Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor // one way of getting value hitesh

// const {courseInstructor} = course;
// console.log(courseInstructor); // hitesh

// or

const {courseInstructor: instructor} = course;
console.log(instructor); // hitesh

// API (apna kaam kisi aur ko dedo)

//JSON like obj but keys are in string and obj has a name

// {
//     "course": "javascript",
//     "fees":"free",
//     "instructor":"hitesh"
// }

//can also be array
[
    {

    },
    {

    }
]
