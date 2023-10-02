// this 

const user = {
    username: "vaibhav",
    price: 37157,

    welcomeMesage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMesage()


/// arrow fuction

/// syntax  () => {}

const addTwo = (num1, num2) => {
 return num1 + num2
}

console.log(addTwo(7,8))

// implicit return for function

const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"vaibhav"})



