var lodash = require('lodash');
var http = require('http');
var url = require('url');

var compute = require('./compute');
// http://localhost:1234/add?x=40&y=20
// http://localhost:1234/sub?x=40&y=20

var server = http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query
    response.write("random : "+ lodash.random(1, 200));
    pathname = pathname.substring(1);
    if(pathname === 'add') {
        response.end(" Sum ->" + compute.add(parseFloat(query.x), parseFloat(query.y)));

    } else if (pathname === 'sub') {
        response.end(" Diff ->" + compute.sub(parseFloat(query.x), parseFloat(query.y)));
    }
});

server.listen(1234, function() {
    console.log("server started!!!")
});

