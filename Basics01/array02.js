const marval_heros = ["ironman","hulk","shang chi"]
const dc_heros = ["superman","flash","batman"]
console.log(marval_heros);
console.log(dc_heros);


// concat

const all_New_Heros = marval_heros.concat(dc_heros)
console.log(all_New_Heros);

// spread//

const all_New_Heros = [...marval_heros, ...dc_heros]
console.log(all_New_Heros);

// flat

const another_Array = [1,2,3[4,5],7,[6,7[4,5]]]
const real_Another_Array = another_Array.flat(Infinity)
console.log(real_Another_Array);



console.log(Array.isArray("VAIBHAV"));
console.log(Array.from("VAIBHAV"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
