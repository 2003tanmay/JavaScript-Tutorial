function multipleBy5(num){ // it is a function

    return num*5
}

multipleBy5.power = 2 

console.log(multipleBy5(5)); // we are calling function 
console.log(multipleBy5.power); // wd can treat function as object also because everything in javascrit at the end come from object an this is known as prototype inheritance.
console.log(multipleBy5.prototype); // it give empty parenthesis b/c multipleBy5 is a non-constructor function so it does not have any property so it is giving empty parenthesis.

function createUser(username, score){ //normal function 
    this.username = username // here "this" is used to differntiate b/w current context username and parametere with same name.
    this.score = score
}

createUser.prototype.increment = function(){ // we are injecting a property to the createUser function but at the end everything is a object so we can inject property to the function.
    this.score++ // it is used to give context which score we wanna increase.
}
createUser.prototype.printMe = function(){ // we are injecting another property 
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25); // we are creating context
const tea = createUser("tea", 250);

chai.printMe();


/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/