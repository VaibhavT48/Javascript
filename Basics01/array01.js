let myArr = [0,1,2,3,4,5]

console.log(myArr);
console.log(4);

//Array Methods
myArr.push(6,7)
console.log(myArr);

myArr.pop(6,7)
console.log(myArr);


myArr.unshift(9)
console.log(myArr);

myArr.shift(9)
console.log(myArr);


console.log(myArr.includes(7));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

/// Slics & Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c", myArr);



