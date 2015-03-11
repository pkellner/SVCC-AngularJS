(function () {

    'use strict';

    var app = angular
        .module('baseApp')
        .controller('SessionsController', SessionsController);

    app.filter("fixPresenterUrl", function() {

        return function(input) {
            var result = input.replace('/Presenter/','');
            return result;
        };
    });


    function SessionsController(sessions,sessionDayOfWeeks) {
        var vm = this;
        vm.sessions = sessions.data;
        vm.sessionDayOfWeeks = sessionDayOfWeeks.data.data;
    }

    SessionsController.$inject = ['sessions','sessionDayOfWeeks'];

}());