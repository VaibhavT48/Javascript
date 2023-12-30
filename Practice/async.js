
const pr1 = new Promise((resolve,reject) => {

  setTimeout(() => {
    resolve("promise resolved")
  }, 4000);
});


const pr2 = new Promise((resolve,reject) => {

  setTimeout(() => {
    console.log("promise resolved");
  },10000);
});

async function handlePromise() {

  console.log("hallo world");

  const val1 = await pr1;
  console.log(pr1);
  console.log(val1);

   const val2 = await pr2;
   console.log(pr2);
   console.log(val2);
}
 
 handlePromise();