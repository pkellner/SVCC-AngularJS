
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$rootScope,$state,CONFIG) {
        $rootScope.baseDir = CONFIG.baseDir;



        //$scope.anguPingMe = function () {
        //    debugger;
        //    $rootScope.pingMeEmailAddress = $scope.pingMeEmailAddress;
        //    $state.transitionTo('base.angupingmeonfirmation');
        //};

    }

    AnguController.$inject = ['$scope', '$rootScope', '$state','CONFIG'];

}());
