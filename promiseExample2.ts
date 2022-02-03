interface User {
 id:number,
 name:string
}

function fetchData(id:number): Promise<User> {
  return new Promise<User> ((resolve, reject) => {
    setTimeout(() => {
       resolve({"id": 5, "name": "Banuprakash"}); // data from server
     // reject("Not found");
   }, 2000);
 });
}

fetchData(5).then(
data => console.log(data),
err => console.log("Boom :-(", err)
);

console.log("not blocked!!!");

// tsc --lib ES2015,dom promiseExample.ts
// node promiseExample.js