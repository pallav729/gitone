var http = require('http');
var bl = require('bl')


lines = ["","",""]
complete = 0

function getContent(i)
{
	  http.get(process.argv[i], function (request) {
request.pipe(bl(function (err, data) { 
	lines[i-2] = data.toString(); 
	complete = complete + 1; 
	if(complete==3)
		{
			console.log(lines[0]);
			console.log(lines[1]);
			console.log(lines[2]);
		}
	}))
  });


}


getContent(2)
getContent(3)
getContent(4)



