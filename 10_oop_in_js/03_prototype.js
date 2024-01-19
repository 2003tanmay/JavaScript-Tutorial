// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){ // we are directly injecting property to the object so everything originated from object have this property.
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){ // // we are directly injecting property to the array so every array have this property.
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh() // heroPower object got hitesh property
// myHeros.hitesh() // myHeros array got hitesh property
// myHeros.heyHitesh() // myHeros array got heyHitesh property
// heroPower.heyHitesh() // heroPower object not got heyHitesh property b/c object lies one level upper to the array

/******************* inheritance ***********************/

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = { // we are creating object
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // we are giving access of the TeachingSupport by linking boyh object
}

Teacher.__proto__ = User // Teacher got property of User. This is also known as prototypel inheritance

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport got property of Teacher

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()