(function () {

    'use strict';

    angular
        .module('baseApp')
        .controller('SessionsController', SessionsController);

    function SessionsController(sessions,sessionDayOfWeeks) {
        var vm = this;
        vm.sessions = sessions;
        vm.sessionDayOfWeeks = sessionDayOfWeeks;
    }

    SessionsController.$inject = ['sessions','sessionDayOfWeeks'];

}());