(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LogoutController', LogoutController);
    function LogoutController($http, $window, $rootScope) {
        var vm = this;
        vm.login = {};


        $http({
            method: 'POST',
            url: '/rpc/account/LogOut'
            //data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            $rootScope.sessionGuid = null;
            $rootScope.loginName = null;
            $window.location = '#/';
        }).error(function (data, status, header, config) {
            $window.location = '#/about';
        });
    }
    LogoutController.$inject = ['$http', '$window', '$rootScope'];

})();


