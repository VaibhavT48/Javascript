//get the odd number

const odd = [2,3,5,7,8,9];

const output1 = odd.filter(function isOdd (x){
    return x % 2;

});

console.log(output1);

//get the even number

const even = [2,3,5,7,8,9];

const output2 = even.filter(function isEven(x){
    return x % 2 === 0;
});

console.log(output2);