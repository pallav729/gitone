var fs = require('fs');
var fileName = process.argv[2];
var bufferContent = fs.readFileSync(fileName);
var content = bufferContent.toString();
var lines = content.split('\n');
console.log(lines.length-1)
