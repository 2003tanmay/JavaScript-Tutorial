const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "batman", "aquaman"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1,2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Tanmay"))
console.log(Array.from("Tanmay"))
console.log(Array.from({name: "tanmay"})); 

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
