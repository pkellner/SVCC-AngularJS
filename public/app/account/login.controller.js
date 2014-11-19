(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LoginController', LoginController);
    function LoginController($http) {
        var vm = this;
        vm.login = {
        };

        vm.login.submitForm = function () {
            var config = {
                params: {
                    data: vm.login
                }
            };

            $http.post('someserver.php', null, config)
                .success(function () {
                    //alert('success');
                })
                .error(function () {
                    //alert('failure');
                });
        };


        LoginController.$inject = ['$http'];

    }
})();


