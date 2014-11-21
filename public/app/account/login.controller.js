(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LoginController', LoginController);
    function LoginController($http,$window) {
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
                $window.location = '#/';
            }).error(function(data,status,header,config){
                $window.location = '#/about';
            });

        };


        LoginController.$inject = ['$http','$window'];

    }
})();


