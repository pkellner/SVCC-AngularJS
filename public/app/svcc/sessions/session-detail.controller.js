(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController(session) {
        var vm = this;
        vm.sessions = [session];
        vm.session = session;
    }

    SessionDetailController.$inject = ['session'];

}());
