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
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'))

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

var hour = 3600000;
var cookieExpire = new Date(Date.now() + hour);

app.use(session({
    secret: 'SecretSessionCode',
    name: 'cookie_name',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: cookieExpire,
        maxAge: hour
    }
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

    //console.log('req.user: ' + req.user);

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


app.post('/rpc/Account/isLoggedIn',function(req,res) {
    var localToken = req.param('localToken');

    var formData = {
        localToken: localToken || 'nolocaltokenfoundinrequest'
    };
    request.post(
        'https://www.siliconvalley-codecamp.com/rpc/Account/isLoggedIn',
        formData,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log('user %s ', req.user);
                console.log('response body length: %s ', body.length);
                //var jsonParsed = JSON.parse(body);
                if (body.length > 0) {
                    res.send(body); // pass through
                    //req.session.success = 'You are successfully logged in ' + user.username + '!';
                    //return done(null, jsonParsed.attendeeResults.username);
                    //
                } else {
                    //req.session.error = jsonParsed.returnStatus;
                    //return done(null, false, { message: jsonParsed.returnStatus });
                    //
                    //done(null, formData.username);
                }
            }
            if (error) {
                //req.session.error = jsonParsed.returnStatus;
                //return done(null, false, { message: error1 });
            }
        }
    );
});





app.get('/rest/session',function(req,res) {

        request.get(
            'https://www.siliconvalley-codecamp.com/rest/session?arrayOnly=true',
            null,
            function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log('user %s ',  req.user);
                    console.log('response body length: %s ', body.length);
                    //var jsonParsed = JSON.parse(body);
                    if (body.length > 0 && req.user ) {
                        res.send(body); // pass through
                        //req.session.success = 'You are successfully logged in ' + user.username + '!';
                        //return done(null, jsonParsed.attendeeResults.username);
                        //
                    } else {
                        //req.session.error = jsonParsed.returnStatus;
                        //return done(null, false, { message: jsonParsed.returnStatus });
                        //
                        //done(null, formData.username);
                    }
                }
                if (error) {
                    //req.session.error = jsonParsed.returnStatus;
                    //return done(null, false, { message: error1 });
                }
            }
        );

    }
);

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
                        //req.session.success = 'You are successfully logged in ' + user.username + '!';
                        return done(null, jsonParsed.attendeeResults.sessionGuid);
                        //
                    } else {
                        //req.session.error = jsonParsed.returnStatus;
                        return done(null, false, { message: jsonParsed.returnStatus });
                        //
                        //done(null, formData.username);
                    }
                }
                if (error) {
                    //req.session.error = jsonParsed.returnStatus;
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

