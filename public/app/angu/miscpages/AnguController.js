
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$anchorScroll,$location) {

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
            console.log('email from pingme: ' + $scope.pingMeEmailAddress)
        }
    }

    AnguController.$inject = ['$scope','$anchorScroll','$location'];

}());
