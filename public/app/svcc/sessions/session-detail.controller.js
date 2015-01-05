(function () {
    'use strict';

    var app = angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);

    app.filter("fixPresenterUrl", function() {

        return function(input) {
            var result = input.replace('/Presenter/','');
            return result;
        };
    });

    function SessionDetailController(session) {
        var vm = this;
        vm.sessions = [session];
        vm.session = session;
    }
    SessionDetailController.$inject = ['session'];

}());
