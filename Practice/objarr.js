const arrayOne = [1,2,3,4,5,6,7]
console.log(arrayOne);

const obj = {
    name: "vaibhav",
    id:65494839,
    email:"vaibhavy2@gmail.com"
}
console.log(obj);

//Array for of

const arr =  [23,34,445,32,12]

for(const num of arr){
console.log(arr);
}

const greetings = "hallow hyanas"
for(const greet of greetings){
    console.log(`greet : ${greetings}`);
}

//object 

const myobject = {
    js:"javascript",
    cpp: "c++",
    rb:"ruby"
}
for(key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);
}