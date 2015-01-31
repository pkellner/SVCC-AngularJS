
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$rootScope,$state,CONFIG) {
        $rootScope.baseDir = CONFIG.baseDir;


        $scope.googleMap = function() {
            // kevin to make new url
            window.open('https://goo.gl/maps/uBzdM','_blank');
        }

        //$scope.anguPingMe = function () {
        //    debugger;
        //    $rootScope.pingMeEmailAddress = $scope.pingMeEmailAddress;
        //    $state.transitionTo('base.angupingmeonfirmation');
        //};

    }

    AnguController.$inject = ['$scope', '$rootScope', '$state','CONFIG'];

}());
