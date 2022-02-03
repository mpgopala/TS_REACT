interface User {
 id:number,
 name:string
}

async function fetchData(id:number): Promise<User> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const json = await response.json();
	return json;
}
 
fetchData(2).then(user => console.log(user));

console.log("not blocked!!!");

// tsc --lib ES2015,dom asyncExample.ts
// node asyncExample.js won't work