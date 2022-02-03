
function fibanocci(no:number) : number {
 return no ==0 || no === 1 ? no : fibanocci(no - 1) +  fibanocci(no - 2);
}

type FunctionType<T, R> = (arg:T) => R;

// OCP with Memoize
function memoize<T,R>(fn:FunctionType<T, R>) {
	var cache:{T?, R?} = {};
	return function(args) {
		if(!cache[args]) {
			cache[args] = fn(args);
		}
		return cache[args];
	}
}

var memFib  = memoize(fibanocci);
// var memGetEmp = memoize(getEmployee);
// memGetEmp(5); ==> API call
// memGetEmp(5); ==> get from cache

console.time("first");
 console.log(memFib  (34));
console.timeEnd("first");

console.time("sec");
 console.log(memFib  (34));
console.timeEnd("sec");

