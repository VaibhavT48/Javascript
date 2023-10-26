// setTimeout

const clear = setTimeout(function(){
    document.querySelector('#stop').addEventListener('click', function(){
        console.log("SYNC");
    })
  
},2000)

clearTimeout(clear,2000)

//set interval

const interval = setInterval(function () {
    console.log("SYNC");
},2000)

clearInterval(interval, 2000)