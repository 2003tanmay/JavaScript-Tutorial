function SetUsername(username){  // we are creating function 
    //complex DB calls
    this.username = username // we are setting username come from the parameter to the current context's username of SetUsername function by using this.
    console.log("called");
}

function createUser(username, email, password){ // we are creating another function
    SetUsername(username) // we are calling SetUsername and in SetUsername we are giving username of createUser and then SetUsername set username to its current context's username it is not setting username to the createUser username. After end of SetUsername(username) setted username goes or vanish.
    SetUsername.call(this, username) // we are calling SetUsername function from createUser function but with the call() method with specifying that the SetUsername having this.username is refer to the context of createUser not the SetUsername by giving this as a context of a createUser to the SetUsername so that setUsername set username to the context of createUser.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/********************** Call ************************/
/*
* In JavaScript, the call() method is a way to invoke a function with a specified this value and arguments provided individually. 
* It allows you to call a function on a specific object, setting the this value to that object. 
* One of the main use cases for call() is to explicitly set the this value when calling a function. In JavaScript, the this value is dynamically determined based on how a function is called.
*/
