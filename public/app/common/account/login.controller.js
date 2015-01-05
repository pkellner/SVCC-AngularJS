(function () {
    'use strict';

    var app = angular.module('baseApp');

    app.controller('LoginController', LoginController);
    function LoginController($http, $window, $rootScope,$state, accountInfoService) {
        var vm = this;
        vm.login = {};

        vm.login.submitForm = function () {
            // username=asdf&password=adsf&rememberMe=false
            $http({
                method: 'POST',
                url: '/rpc/account/login',
                data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $http.post('/rpc/Account/IsLoggedIn').then(function (response) {

                    $rootScope.loginName = response.data.attendeeResults.username;
                    $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
                    $state.transitionTo('svcc.home');

                });


            }).error(function (data, status, header, config) {
                alert('login failed');
               // $state.transitionTo('svcc.home');
            });

        };
    }

    LoginController.$inject = ['$http', '$window', '$rootScope','$state', 'accountInfoService'];
})();


