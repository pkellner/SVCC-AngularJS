var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var request = require('request');
var session = require('express-session');
var flash = require('connect-flash');
var bodyParser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.use(express.logger('dev'));
//app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());
app.use(session({
    secret: 'a;sdfsadfksdf;',
    name: 'cookie_name',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());

//app.use(express.methodOverride());

// http://orchestrate.io/blog/2014/06/26/build-user-authentication-with-node-js-express-passport-and-orchestrate/
app.use(passport.initialize());
// https://github.com/jkvoorhis/userAuth/blob/master/index.js
//http://www.learnallthenodes.com/episodes/23-authorization-with-passport-part-1-ensuring-theyre-logged-in

app.use(passport.session());
app.use(flash());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Session-persisted message middleware
app.use(function(req, res, next){
    var err = req.session.error;
    var msg = req.session.notice;
    var success = req.session.success;

    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;

    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;

    next();
});

//// Simple route middleware to ensure user is authenticated.
//function ensureAuthenticated(req,res,next) {
//    if (req.isAuthenticated()) {
//        next();
//    } else {
//        req.flash('error', 'You must be logged in to do that.');
//        res.redirect('/sign_in');
//    }
//}


//// development only
//if ('development' == app.get('env')) {
//    app.use(express.errorHandler());
//}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null,id);
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
                        //req.session.success = 'You are successfully logged in ' + user.username + '!';
                    } else {
                        return done(null, false, { message: jsonParsed.returnStatus });
                        //req.session.error = jsonParsed.returnStatus;
                        //done(null, formData.username);
                    }
                }
                if (error) {
                    var error1 = 'Connection To Silicon Valley Code Camp Did Not Succeed.';
                    return done(null, false, { message: error1 });
                }
            }
        );
    }
));

app.post('/rpc/account/login',
    //passport.authenticate('local')
    passport.authenticate('local', {
        successRedirect: '/#/session',
        failureRedirect: '/home',
        failureFlash: true
    })
);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

