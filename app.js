var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



//var routes = require('./routes/index');
//var users = require('./routes/users');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');

//var flash = require('connect-flash');
var session = require('express-session');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


// Session-persisted message middleware
//app.use(function(req, res, next){
//    var err = req.session.error,
//        msg = req.session.notice,
//        success = req.session.success;
//
//    delete req.session.error;
//    delete req.session.success;
//    delete req.session.notice;
//
//    if (err) res.locals.error = err;
//    if (msg) res.locals.notice = msg;
//    if (success) res.locals.success = success;
//
//    next();
//});

// required for passport
//app.use(session({secret: 'adsfsadfsafdsafasd'})); // session secret

//app.use(passport.session()); // persistent login sessions







var router = express.Router();

router.post('/', function (req, res) {
    //res.send('respond with a post account resource');
    var username = req.param('username');
    var password = req.param('password');

    console.log('username: ' + username);
    console.log('password: ' + password);

    app.use(passport.initialize());
    app.use(passport.session);


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        done(null, id);
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            var formData = {
                username: username,
                password: password,
                rememberMe: true
            };

            request.debug = true;

            request.post(
                'https://www.siliconvalley-codecamp.com/rpc/account/login',
                {form: formData},
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var jsonParsed = JSON.parse(body);
                        if (jsonParsed.returnStatus === 'OK') {
                            return done(null, jsonParsed.attendeeResults.username);
                            req.session.success = 'You are successfully logged in ' + user.username + '!';
                        } else {
                            req.session.error = jsonParsed.returnStatus;
                            done(null, formData.username);
                        }
                    }
                    if (error) {
                        req.session.error = 'Connection To Silicon Valley Code Camp Did Not Succeed.';
                        return done(null, null);
                    }
                }
            );
        }
    ));

    passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/login',
        failureFlash: false
    });
});
app.use('/rpc/account/login',router);

app.set('view engine', 'ejs');
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));

//
//app.use( function( req, res, next ) {
//    //....
//    //next();
//} );


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.post('/xxx', function(req, res){
//    console.log('POST /');
//    console.dir(req.body);
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('thanks');
//
//});


//
//app.post('/account/login',
//    function(res,req) {
//
//    }
//    //passport.authenticate('local', {
//    //    successRedirect: '/success',
//    //    failureRedirect: '/login',
//    //    failureFlash: true
//    //})
//);

//var account = require('./routes/account');
//app.use('/account', account);




module.exports = app;


//catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




var port = 3000; //process.env.port;
app.listen(port);
console.log('Listening on ' + port);
