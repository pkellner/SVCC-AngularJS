
$(document).ready(function() {

    $(".btn-google").click(function(event) {
        authServerByProvider('google');
    });

    $(".btn-twitter").click(function(event) {
        authServerByProvider('twitter');
    });

    $(".btn-facebook").click(function(event) {
        authServerByProvider('facebook');
    });

    $(".btn-microsoft").click(function(event) {
        authServerByProvider('microsoftaccount');
    });


    function authServerByProvider(providerName) {
        var client = new WindowsAzure.MobileServiceClient('https://svcc.azure-mobile.net/', 'eiZjeDWDMNUnuTsXojsFBCjHwBFELC72');
        client.login(providerName).done(function(results) {
            $.ajax({
                type: 'POST',
                url: '/rpc/account/AuthenticateOAuth',
                data: {
                    UserId: results.userId,
                    ProviderName: providerName
                },

                success: function(data) {
                    if (data.attendeesId == -1) {
                        window.location.href = '/Account/AuthedInNoSvccAccountFound';
                    } else {
                        window.location.href = '/';
                    }

                },
                error: function(result) {
                    $.prompt('account/AuthenticationOAuth Failed.  ');
                }
            });
        });
    }
});










