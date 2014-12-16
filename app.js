var express = require('express');
var path = require('path');
var session = require('express-session');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var routes = require('./routes/pages');
var users = require('./routes/users');
var time = require('./routes/time');

var app = express();

app.use(session({
  secret: '1234567890',
  resave: false,
  saveUninitialized: true
}))



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());


app.use(function(req, res, next) {
    console.log("Log incoming: "+ req.url);
    next();
	});

app.use(express.static(path.join(__dirname, 'public')));


app.post('/login', function(req, res) {
    console.log("in post");
    req.session.sessionId = 1;
    res.send("logged in");
});

app.get('/logout', function(req, res) {
        console.log("in logout");
	req.session.destroy();
        res.send("logged out");
});

app.use('/', routes);
app.use('/users', users);
app.use('/time',time);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

console.log(app.get('env'));
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'));


