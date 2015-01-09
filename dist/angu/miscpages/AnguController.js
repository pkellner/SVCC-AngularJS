
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$rootScope,$anchorScroll,$location,$state) {

       $scope.anguHomeClick = function() {
           $location.hash('anguHome');
           $anchorScroll();
       }

        $scope.anguLocationClick = function() {
            $location.hash('anguLocation');
            $anchorScroll();
        }

        $scope.anguSpeakersClick = function() {
            $location.hash('anguSpeakers');
            $anchorScroll();
        }


        $scope.anguProgramClick = function() {
            $location.hash('anguProgram');
            $anchorScroll();
        }

        $scope.anguSponsorsClick = function() {
            $location.hash('anguSponsors');
            $anchorScroll();
        }

        $scope.anguPingMe = function() {
            console.log('email from pingme: ' + $scope.pingMeEmailAddress);
            $rootScope.pingMeEmailAddress = $scope.pingMeEmailAddress;
            $state.transitionTo('angupingmeonfirmation');
        }

        $scope.backToHomePage = function() {
            $state.transitionTo('base.home');
        }
    }

    AnguController.$inject = ['$scope','$rootScope','$anchorScroll','$location','$state'];

}());
