(function () {
    'use strict';

    var app = angular.module('baseApp');

    app.controller('LogoutController', LogoutController);
    function LogoutController($http, $window, $rootScope, $state) {
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
            $state.transitionTo('svcc.home');
        }).error(function (data, status, header, config) {
            alert('logout failed');
        });
    }

    LogoutController.$inject = ['$http', '$window', '$rootScope', '$state'];

})();


