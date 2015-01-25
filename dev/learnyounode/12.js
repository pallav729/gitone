var fs = require('fs');
var http = require('http');

server = http.createServer(function(request, response) {
    var map = require('through2-map')
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)

});
server.listen(process.argv[2]);
