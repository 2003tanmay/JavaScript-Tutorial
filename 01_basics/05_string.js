const name  = "tanmay" 
const repoCount = 17
// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('abcdefghi')

console.log(gameName[1])

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4);
console.log(newString);
const anotherstring = gameName.slice(-8, 4);

const newString1 ="       hello     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://google.com/tanmay%20pal"
console.log(url.replace('%20', '-'));