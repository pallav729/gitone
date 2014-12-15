var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.hostname);
  res.render('index', { hostname: req.hostname, title: 'Express' });
});

router.get('/about', function(req, res) {
	  res.render('about', { hostname: req.hostname, title: 'About' });
	});

router.get('/contact', function(req, res) {
      console.log(req.hostname);      
	  res.render('contact', { hostname: req.hostname, title: 'Contact' });
	});

module.exports = router;
