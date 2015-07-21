/*
this need to 
1.  check if the entered email exists as username or email
2.  create a new user
3.  on success of new user do the proper auth reg and redirect
*/

$(document).ready(function() {

    $(".btn-google").click(function(event) {
        createUserAuthProvider('google');
    });

    $(".btn-twitter").click(function(event) {
        createUserAuthProvider('twitter');
    });

    $(".btn-facebook").click(function(event) {
        createUserAuthProvider('facebook');
    });

    $(".btn-microsoft").click(function(event) {
        createUserAuthProvider('microsoftaccount');
    });

    
    function createUserAuthProvider(providerName) {

        var recaptchaChallengeField = $('#recaptcha_challenge_field').val();
        var recaptchaResponseField = $('#recaptcha_response_field').val();
        if (!recaptchaResponseField || recaptchaResponseField.length == 0) {
            recaptchaResponseField = 'blank';
        }
        var email = $('#Login_Email').val();
        if (!email || email.length == 0) {
            $.prompt("You must enter an email to continue.  No password is needed if you are using a social login below, but you do need an email that will be associated with your code camp account.");
            return;
        }

        $.ajax({
            type: 'POST',
            url: '/rpc/account/CheckEmailOkToCreate',
            data: {
                Email: email
            },
            error: function (result2) {
                var err = $.parseJSON(result2.responseText).message;
                $.prompt(err);
            },
            success: function (data) {
                var client = new WindowsAzure.MobileServiceClient('https://svcc.azure-mobile.net/', 'eiZjeDWDMNUnuTsXojsFBCjHwBFELC72');
                client.login(providerName).done(
                    function (results) {
                        $.ajax({
                            type: 'POST',
                            url: '/rpc/account/CreateEmailOnlyUser',
                            data: {
                                Email: email,
                                ProviderName: providerName,
                                ProviderToken: results.userId,
                                RecaptchaChallengeField: recaptchaChallengeField,
                                RecaptchaResponseField: recaptchaResponseField
                            },
                            success: function(data1) {
                                window.location.href = '/Register/IndexStep2';
                            },
                            error: function (err3) {
                                var errxx = $.parseJSON(err3.responseText).message;
                                Recaptcha.reload();
                                $.prompt(errxx);
                            }
                        });
                    },
                    function (err) {
                        // this is hopefully from azurelib error, never tested yet
                        $.prompt('Error:' + err);
                    });
            }
            
        });
    }
});



