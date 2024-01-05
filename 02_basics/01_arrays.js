// array
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies.

const myarr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron-Man", "Thor"]

const myarr2 = new Array(1, 2, 3, 4);

console.log(myarr);

// array methods

myarr.push(6)
myarr.push(7)
console.log(myarr);

myarr.pop()
console.log(myarr)

myarr.unshift(9)
console.log(myarr)

myarr.shift()
console.log(myarr)

console.log(myarr.includes(9))
console.log(myarr.indexOf(9))

const newArr = myarr.join(); // convert into string

console.log(typeof newArr)
console.log(myarr)

// slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(1, 3) //last range not include and original array not manipulate

console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1, 3) //last range include and original array not contain value from 1 to 3
console.log(myn2);
console.log("C", myarr);
