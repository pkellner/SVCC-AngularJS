
//'use strict';

function RegisterController(stripe,config,$scope,$http,creditcards) {

    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);


        debugger;
        Stripe.setPublishableKey('pk_test_VHE6jqXOnBJWRKY1WfmMd9Xa');

        return stripe.card.createToken({
                    number: '4242424242424242',
                    cvc: '1111',
                    exp_month: '01',
                    exp_year: '2020'
                })
            .then(function (token) {
                debugger;
                console.log('token created for card ending in ', token.card.last4);
                var payment = angular.copy($scope.payment);
                //payment.card = void 0;
                //payment.token = token.id;
                payment = {
                    testVal: 10001
                };
                return $http.post('/Svcc/Payment', payment);
            })
            .then(function (payment) {
                console.log('successfully submitted payment for $', 'amount here');
            })
            .catch(function (err) {
                if (err.type && /^Stripe/.test(err.type)) {
                    console.log('Stripe error: ', err.message);
                }
                else {
                    console.log('Other error occurred, possibly with your API', err.message);
                }
            });



    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();

}
RegisterController.$inject = ['stripe','config','$scope','$http','creditcards'];

export default RegisterController;