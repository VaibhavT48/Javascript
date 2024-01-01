console.log("start");

setTimeout (function cb(){
  console.log("callback");
<<<<<<< HEAD
},4000);
=======
},3000);
>>>>>>> a1b057b375f950e88076be0c13461fc841c72cc3

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

<<<<<<< HEAD
while(endDate < startDate + 10000){

endDate = new Date().getTime();
=======
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
>>>>>>> a1b057b375f950e88076be0c13461fc841c72cc3
}
console.log("while expires");
