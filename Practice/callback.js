setTimeout(function () {
    console.log("Timer");
},5000);                 //It will execute after 5000 m/s 

function x(y){
    console.log("x");
    y();              // javascript does not wait for timer it will directly execute x & y
}

x(function y(){
    console.log("y");
});




/*setTimeout (function(){
    console.log("Timer");
},5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
 console.log("y")
});*/


function attachEventListner(){
    let count = 0;

    document.getElementById("clickMe")
    .addEventListener("click", function EV() {
    console.log("button clicked", ++count);
        
    });
}
attachEventListner();