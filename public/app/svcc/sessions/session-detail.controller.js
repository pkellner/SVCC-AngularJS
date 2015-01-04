(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController() {

        debugger;
        var vm = this;
        vm.sessions = [session];
        vm.session = session;
    }

    //SessionDetailController.$inject = ['session'];

}());
