(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LoginController', LoginController);
    function LoginController($http) {
        var vm = this;
        vm.login = {};



        vm.login.submitForm = function () {
            //$http.post('https://www.siliconvalley-codecamp.com/rpc/acount/login', {
            //$http.post('/rpc/account/login', {
            //$http.post('/account', {
            //    username: vm.login.username,
            //    password: vm.login.password
            //})
            //    .success(function () {
            //        //alert('success');
            //    })
            //    .error(function () {
            //        //alert('failure');
            //    });



            // username=asdf&password=adsf&rememberMe=false
            $http({
                method: 'POST',
                url: '/rpc/account/login',
                data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });

        };


        LoginController.$inject = ['$http'];

    }
})();


