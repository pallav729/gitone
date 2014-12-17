var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
  if(req.session.sessionId) {
    next();
  }
  else {
    res.render('login', { hostname: req.hostname, title: "Login" });
  }  
});
router.get('/', function(req, res) {
  res.render('index', { hostname: req.hostname, title: "Home" });
});

router.get('/about', function(req, res) {
  res.render('about', { hostname: req.hostname, title: 'About' });
});

router.get('/contact', function(req, res) {  
  res.render('contact', { hostname: req.hostname, title: 'Contact' });
});

module.exports = router;
