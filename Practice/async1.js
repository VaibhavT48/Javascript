


async function getData(){
  return "javascript";    //return value (promise will wrap it inside promise & returns a promise)
}
const data = getData();
console.log(data);

data.then(res => console.log(res));  //getting only value from promises


// return promise


const pro = new Promise ((resolve, reject) => {
  resolve("promise resolved");
});



const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("promise resolved");
  },5000);
});


const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("promise resolved");
  },10000);

});

async function handlePromise(){
  console.log("hallo world");

  const val1 = await pr1;
  console.log("Javascript1");
  console.log(val1);

  const val2 = await pr2;
  console.log("javascript2");
  console.log(val2);
}

handlePromise();