const myNums = [1,2,3,4,5]

const myTot = myNums.filter(function(acc, curval){
    console.log(`acc : ${acc} curv is: ${curval}`);
    return acc + curval
},0)