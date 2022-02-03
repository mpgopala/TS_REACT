//HOF
interface Product {
 id:number,
name:string,
category:string,
price:number;
}

let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];



function forEach<T>(elems:T[], action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

//HOF

function filter<T>(elems:T[], predicateFn:(elem:T) => boolean) : T[] {
	let res:T[] = [];
	forEach(elems, elem => {
		if(predicateFn(elem)) {
			res.push(elem);
		}
	});
	return res;
}

let nos:number[] = [6,3,5,8,9,1];

let output = filter(nos, n => n %2 === 0);
forEach(output, console.log);

let mobiles = filter(products, p => p.category ==='mobile');
forEach(mobiles, console.log);

function map<T, R>(elems:T[], transformFn:(elem:T) => R) : R[] {
	let res:R[] = [];
	forEach(elems, elem =>  res.push( transformFn(elem)));
 	return res;
}

let names:string[] = map(products, p => p.name);

forEach(names,console.log);
