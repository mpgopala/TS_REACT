function fibanocci(no) {
    return no == 0 || no === 1 ? no : fibanocci(no - 1) + fibanocci(no - 2);
}
function memoize(fn) {
    var cache = {};
    return function (args) {
        if (!cache[args]) {
            cache[args] = fn(args);
        }
        return cache[args];
    };
}
var memFib = memoize(fibanocci);
console.time("first");
console.log(memFib(34));
console.timeEnd("first");
console.time("sec");
console.log(memFib(34));
console.timeEnd("sec");
