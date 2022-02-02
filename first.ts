
function add(a: number , b: number) : number | string {
	return a + b;
}

console.log(add(4,5));


console.log(add("4",5)); // error by TSC

