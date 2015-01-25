function printLines(err, content)
{
	var lines = content.toString().split('\n');
	console.log(lines.length-1)
}

var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, printLines);

