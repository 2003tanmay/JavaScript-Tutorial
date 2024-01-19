const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //getOwnPropertyDescriptor give hidden property of object

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false, // made name property of chai non-writable
    enumerable: true, // made name property of chai enumerable
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { // we iterate object
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}