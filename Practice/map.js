
// binary number

const arr = [2,3,5,7,8,9];

const output = arr.map(function binary(x){
return x.toString(2);
});

console.log(output);

// double array

const arr1 = [2,3,5,7,8,9];

const output1 = arr1.map(function double(x){

    return x * 2
});
console.log(output1);

//triple array

const arr2 = [2,3,5,7,8,9];

const output2  = arr2.map(function triple(x){
    return x * 3;
});

console.log(output2);