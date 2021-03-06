var fs = require('fs');
var http = require('http');
var url = require('url');

server = http.createServer(function(request, response) {
    console.log("******* Start processing request");
    console.log(request.headers)
    console.log(request.method)
    console.log(request.socket.remotePort);
    console.log(request.socket.remoteAddress);
    response.setHeader("Content-Type", "text/html");
    if(request.method == "GET")
    {
        ProcessGetRequest(request, response);
    }
    else
    {
        response.write("Give me get");
    }
    response.end();
    console.log("******* End processing request");

});
server.listen(process.argv[2]);


function ProcessGetRequest(request, response)
{
    var parsedUrl = url.parse(request.url,true);
var d1 = new Date(parsedUrl.query['iso']);

    if(parsedUrl.pathname == '/api/parsetime')
    {
	console.log(parsedUrl.query['iso']);
                response.writeHead(200, { 'Content-Type': 'application/json' })
        var dj = {
          "hour": d1.getHours(),
          "minute": d1.getMinutes(),
	  "second": d1.getSeconds()
	};
	response.write(JSON.stringify(dj));
    }
    else if(parsedUrl.pathname == '/api/unixtime')
    {
        response.writeHead(200, { 'Content-Type': 'application/json' })

        var x = (d1.getTime());
	var dj = {"unixtime":x};
	console.log(parsedUrl.pathname);
	response.write(JSON.stringify(dj));
    }
    else
	{
         response.write(now());
        }
    
}


function now () {
 var d = new Date()
 return d.getFullYear() + '-'
 + zeroFill(d.getMonth() + 1) + '-'
 + zeroFill(d.getDate()) + ' '
 + zeroFill(d.getHours()) + ':'
 + zeroFill(d.getMinutes())
}


function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
}

