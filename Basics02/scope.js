let a = 300 

////global scope
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);   /// local or block scope
    
}

console.log(a);


// scope level & hoisting

function one(){
    const username = "vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);
        one()
    }
    two()
}


if (true) {
    const username = "vaibhav"
    
    if (username === "vaibhav") {
        const website = "youtube"
        console.log(username + website);
        
    }
       website()
}
  username()


  /// Hoisting

  function addOne(num){
    return num + 1
  }
  addOne()

  const addTwo = function(num){            // hoisting expression context
    return num + 1
  }