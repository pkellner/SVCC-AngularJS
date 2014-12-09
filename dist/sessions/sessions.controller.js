(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SessionsController', SessionsController);



    function SessionsController(sessions) {
        var vm = this;
        vm.sessions = sessions;
    }

    SessionsController.$inject = ['sessions'];

}());