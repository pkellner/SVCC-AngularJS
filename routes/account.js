var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res) {
    //res.send('respond with a post account resource');
    var username = req.param('username');
    var password = req.param('password');



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
        failureFlash: true
    });

});


module.exports = router;
