var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
//HOF
function filter(elems, predicateFn) {
    var res = [];
    forEach(elems, function (elem) {
        if (predicateFn(elem)) {
            res.push(elem);
        }
    });
    return res;
}
var nos = [6, 3, 5, 8, 9, 1];
var output = filter(nos, function (n) { return n % 2 === 0; });
forEach(output, console.log);
var mobiles = filter(products, function (p) { return p.category === 'mobile'; });
forEach(mobiles, console.log);
function map(elems, transformFn) {
    var res = [];
    forEach(elems, function (elem) { return res.push(transformFn(elem)); });
    return res;
}
var names = map(products, function (p) { return p.name; });
forEach(names, console.log);
