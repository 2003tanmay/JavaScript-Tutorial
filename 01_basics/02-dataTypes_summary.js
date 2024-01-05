// Primitive => give copy of value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Refrence (non-primitive) => give reference of value

// Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) //symbol used for uniquly identification 

// ************************* Memory ********************

// Stack (Primitive) , Heap (Non - primitive)

let myName = "Tanmay Pal"
let anotherName = "Tashu Pal"

console.log(myName);
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user

user2.email = "tanmay@gmail.com"

console.log(user);
console.log(user2);