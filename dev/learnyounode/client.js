var http = require('http');
var bl = require('bl')

var post_data = "In lower, come back in upper"

var post_options = {
      host: 'http://polovm.cloudapp.net/api/parsetime?iso=2013-08-10T12:10:15.474Z',
      port: '80',
      method: 'GET',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
};


  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });


// post_req.write(post_data);
  post_req.end();
