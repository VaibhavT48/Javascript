const code = ["ruby", "java", "c++", "javascript"]

code.forEach(function(code){
    console.log(code);
})


// By using arrow function

code.forEach((code) => {
    console.log(code);
})


//filter

const mynums = [1,2,3,4,5,6,7,8,9,10]

 const newnums = mynums.filter((num) =>{
  return num>8
})

console.log(newnums);

// map

const newnum = mynums.map((num)=> num+10)
console.log(newnum);

// reduse

const mynnumber = [1,2,3,4,5,6,7,8]
myTotal = mynnumber.reduce(function(acc,curval){
    return acc + curval
},0)

//console.log(myTotal);

// by using arrow function

myTotal = mynnumber.reduce((acc, curval )=> acc + curval,0)
console.log(myTotal);



