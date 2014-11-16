(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SessionsController', SessionsController);

    function SessionsController($scope, sessionResourceService) {
        var vm = this;

        //$scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
        vm.sessions = sessionResourceService.query();

        //vm.onClick = function (myId) {
        //    alert('clicked ' + myId);
        //};

        vm.orderProp = 'title';

    }

    SessionsController.$inject = ['$scope', 'sessionResourceService'];


}());