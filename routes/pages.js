var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session.lastPage);
  if(req.session.lastPage) {
      res.render('index', { hostname: req.hostname, title: req.session.lastPage });
  }
  res.render('index', { hostname: req.hostname, title: 'Express' });  
  req.session.lastPage = 'Already Visited';
});

router.get('/about', function(req, res) {
          req.session.lastPage = undefined;
	  res.render('about', { hostname: req.hostname, title: 'About' });
	});

router.get('/contact', function(req, res) {  
	  res.render('contact', { hostname: req.hostname, title: 'Contact' });
	});

module.exports = router;
