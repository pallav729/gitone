var extension = undefined;
var fs = require('fs');

var files1 = [];
function printFiles(err, files)
{
	for (i = 0; i < files.length; i++)
	{
		
				console.log(files[i]);
		
	}
}



var fs = require('fs');
var directory = process.argv[2];
extension = process.argv[3];


var mdl = require('./mymodule');
mdl(directory, process.argv[3], printFiles);




