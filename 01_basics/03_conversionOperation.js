let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);

// any data to number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;
// null => 0
// undefined => NaN

let isLoggedIn = ""

console.log(typeof isLoggedIn);
console.log(typeof(isLoggedIn));

let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean);

// any data to boolean
// "33" => true
// "33abc" => true
// "" => false
// 33 => true
// null => false
// undefined => false

let stringCheck = true

console.log(typeof stringCheck);
console.log(typeof(stringCheck));

let valueInString = String(stringCheck)
console.log(typeof(valueInString));
console.log(valueInString);

// any data to string
// 33 => string - 33
// null => string - null
// undefined => string - undefined
// true => string - true; false => string - false;

// ************************* Operations ************************

let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello "
let str2 = "tanmay"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")
console.log(1 + "2" + 2);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1);
