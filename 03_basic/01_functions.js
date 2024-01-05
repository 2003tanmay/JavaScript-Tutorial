function sayMyName(){
    console.log("T");
    console.log("A")
    console.log("N")
    console.log("M")
    console.log("A")
    console.log("Y")
}
// sayMyName();

function addtwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addtwoNumbers(1, 2));

function calculateCartPrice(...num) { //rest opertor
    return num
}

console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice1(val1, val2, ...num) { //rest opertor
    return num
}

console.log(calculateCartPrice1(200, 400, 500, 600, 800, 1000));

const user = {
    username: "tanmay",
    price: 600
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price: ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 500
})