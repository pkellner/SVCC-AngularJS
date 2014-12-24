(function () {
    'use strict';

    var app = angular.module('baseApp');

    app.controller('LoginController', LoginController);
    function LoginController($http,$window,$rootScope,AccountInfoService) {
        var vm = this;
        vm.login = {};

        vm.login.submitForm = function () {
            // username=asdf&password=adsf&rememberMe=false
            $http({
                method: 'POST',
                url: '/rpc/account/login',
                data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data,status,headers,config) {
                $http.post('/rpc/Account/isLoggedIn').then(function (response) {
                    console.log('error from isLoggedIn Post. length returned: ' + response.data.length);

                    AccountInfoService.setInfo(response.data);

                    angular.module('svccApp').value('configData', angular.fromJson(response.data));
                    $rootScope.loginName = response.data.attendeeResults.username;
                    $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
                });

                $window.location = '#/';
            }).error(function(data,status,header,config){
                $window.location = '#/about';
            });

        };
    }
    LoginController.$inject = ['$http','$window','$rootScope','AccountInfoService'];
})();


