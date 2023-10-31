const promiseOne = new Promise (function(resolve, reject) {
    
    setTimeout (function(){
        console.log('async is completed');
       resolve()   //// conmect 
    },2000)
    })
    
    promiseOne.then(function(){
        console.log('promise resolved');
})

////////////////////////////////////

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async task 2');
        resolve()
        
    },1000)
    
}).then(function() {
    console.log('async resolved');
    
})

///////////////////////////////////

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: 'vaibhav', email: 'vaibhavyadav@gmail.com'})

    },1000)

})
   
 promiseThree.then(function(user){
    console.log(user);
 })

 ////////////////////////////////////

 const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            console.log({username:"vaibhav", password: "544788298"});
            
        }else{
           console.log("ALERT: something went wrong");
        }

    },1000)
 })

 ////////////////////////////////////////

 promiseFour.then((user)=>{
    console.log(user);
    user.username

 }).then((username)=>{
    console.log(username);

 }).catch(function(error){
    console.log(error);

    //////
 }).finally(()=>{console.log("The promise ie either resolved or rejected");})

 //////////////////////////////

 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.