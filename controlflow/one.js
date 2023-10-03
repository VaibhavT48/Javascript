const temperature = 42

if (temperature > 50) {

    console.log("less than 50");
    
}
else{
console.log("greater than 50");
}


////////////////////////////////////

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`power:${power}`);
    
}


////nested if

const balance = 1000

if (balance < 500) {
    console.log("less than 500");
    
}
else if (balance < 750) {
    console.log("less than 750");
    
}
else if (balance < 900) {
    console.log("less than 900");
    
}
else(balance < 1200) ;
    console.log("less than 1200");

//////////////////////

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {

    console.log("allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user loggedIn");
    
}