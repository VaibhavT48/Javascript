console.log("Start");

setTimeout (function cb(){
    console.log("callback");
},4000)

console.log("end");


let startDate = new Date().getDate();
let endDate = startDate
while (endDate < new Date() + 10000) {
    endDate = new Date().getDate();
}

console.log("while expires");