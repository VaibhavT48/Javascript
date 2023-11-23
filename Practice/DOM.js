var bulb = document.querySelector("#bulb")
var btn = document.querySelector("#button")


let flag = 0
btn.addEventListener("click", function(){
if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        flag = 1
    
}
 else{  
     bulb.style.backgroundColor = "white"
    console.log("again clicked");
    flag = 1
 }
})
  



