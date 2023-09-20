let myName = "vaibhavyadav4884@gmail.com"

let anotherName = myName                       //stack
let anotherName1 = "chai aur code"

console.log(myName);
console.log(anotherName1);

let userTwo  = userOne

userTwo.Email = "vaibhavyadav4884@gmail.com"

console.log(userOne.Email);                  // heap
console.log(userTwo.Email);
