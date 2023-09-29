const tinderUser  = new Object()  //singleton object

console.log(tinderUser);

tinderUser.name = "vaibhav"
tinderUserid = "JDKJN84498"
tinderUser.isloggedin = false

console.log(tinderUser);



// object inside object
const regularUser = {

    fullname: {
        userfullname:{
            firstname: "vaibhav",
            lastname: "yadav"
        }
    }
}

console.log(regularUser.fullname.firstname);  //nested


const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"}


const obj3  = Object.assign({},  obj1, obj2, obj4)  ///target src 

console.log(obj3);


const obj3 = {...obj1,...obj2,...obj4}  // spread  operator
console.log(obj3);



// Relevently used 


user[1].firstname
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));