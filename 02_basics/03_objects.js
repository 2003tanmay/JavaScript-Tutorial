// singleton  = when we create using constructor
// Object.create

// objects literals

const mySym = Symbol("key1") 

const jsUser = {
    name: "Tanmay", //key value pair
    "full name": "Tanmay Pal",
    age: 21,
    [mySym]: "mykey1", //syntax for symbol
    location: "Indore",
    email: "tanmayspal2003@gmail.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "saturday"],
}

myArr = ["h", "i"] // indexd wise

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser."full name"); // give error 
console.log(jsUser["full name"]); 
console.log(jsUser[mySym]); //accessing symbol

jsUser.email = "tanmay@gmail.com"
// Object.freeze(jsUser) //after freezing value not change 
jsUser.email = "sakaksjkjs"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello");
}

console.log(jsUser.greeting); //it not execute function but give reference of that function
console.log(jsUser.greeting()); //it execute function

jsUser.greeting2 = function(){
    console.log(`hello, ${this["full name"]}`);
}

console.log(jsUser.greeting2());