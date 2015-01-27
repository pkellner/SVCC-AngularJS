(function () {
    'use strict';

    angular.module('baseApp')
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController(session) {
        var vm = this;
        vm.sessions = [session.data.data[0]];
        vm.session = session.data.data[0];
    }
    SessionDetailController.$inject = ['session'];

}());
