var extension = undefined;

function printFiles(err, files)
{
	for (i = 0; i < files.length; i++)
	{
		var file = files[i];
		var names = file.split('.')
		if(names.length > 1)
		{
			if(names[names.length-1] == extension)
			{
				console.log(file);
			}
		}
	}
}

var fs = require('fs');
var directory = process.argv[2];
extension = process.argv[3];
fs.readdir(directory, printFiles);

