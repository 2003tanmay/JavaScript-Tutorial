/************************ Promises ********************/
/*
 * the promis object represents the eventual completion or failure of an asynchronous operation and it's resulting value.
 * A Promise is in one of these states:
 * 1. pending: initial state, neither fulfilled nor rejected.
 * 2. fulfilled: meaning that the operation was completed successfully.
 * 3. rejected: meaning that the operation failed.
*/

//we are creating promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //it is use for call then
    }, 1000)
})

//we are consuming promise 
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // passing data to the then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong') //it give error
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username //this return goes to the next then
}).then((username) => {
    console.log(username);
}).catch(function(error){ //this catch error
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) // this code run either promise is resolved or rejected



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//we can handel promises with the help of async, await
async function consumePromiseFive(){
    try {
        const response = await promiseFive //we are waiting for primiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.