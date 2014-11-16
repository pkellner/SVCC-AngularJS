(function () {
    'use strict';

    //angular.module('sessionDetailController',
    //    ['ngRoute', 'ngResource'])

    angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController($routeParams, sessionResourceService) {
        var vm = this;
        vm.sessions = [];

        sessionResourceService.query(function (sessionsx) {
            angular.forEach(sessionsx, function (value) {
                if (String(value.id) === $routeParams.id) {
                    vm.sessions.push(value);
                }
            });
            if (vm.sessions.length > 0) {
                vm.session = vm.sessions[0];
            }
        });


        vm.onClick = function (myId) {
            alert('clicked ' + myId);
        };

        //            vm.orderProp = "lastName";

    }

    SessionDetailController.$inject = ["$routeParams", "sessionResourceService"];

}());