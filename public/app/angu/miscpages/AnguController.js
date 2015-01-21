
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$rootScope,$anchorScroll,$location,$state,CONFIG) {

        $rootScope.baseDir = CONFIG.baseDir;


       $scope.anguHomeClick = function() {
           $location.hash('anguHome');
           $anchorScroll();
       };

        $scope.anguLocationClick = function() {
            $location.hash('anguLocation');
            $anchorScroll();
        };

        $scope.anguSpeakersClick = function() {
            $location.hash('anguSpeakers');
            $anchorScroll();
        };


        $scope.anguProgramClick = function() {
            $location.hash('anguProgram');
            $anchorScroll();
        };

        $scope.anguSponsorsClick = function() {
            $location.hash('anguSponsors');
            $anchorScroll();
        };

        $scope.anguPingMe = function() {
            //console.log('email from pingme: ' + $scope.pingMeEmailAddress);
            $rootScope.pingMeEmailAddress = $scope.pingMeEmailAddress;
            $state.transitionTo('base.angupingmeonfirmation');
        };

        $scope.backToHomePage = function() {
            $state.transitionTo('base.home');
        };
    }

    angular.module('baseApp')
        .directive('scrollPosition', function($window) {
          return {
            scope: {
              scroll: '=scrollPosition',
              activeSection: '=activeSection'
            },
            link: function(scope, element, attrs) {
              var windowEl = angular.element($window);
              var navSections = angular.element(document.querySelectorAll('.nav--section'));
              var handler = function () {
                scope.scroll = $window.scrollY;
                for (var i = 0; i < navSections.length; i++) {
                    if (scope.scroll > navSections[i].offsetTop) {
                        scope.activeSection = navSections[i].id;
                        console.log(navSections[i].offsetTop);
                        break;
                    }
                }
              };
              windowEl.on('scroll', scope.$apply.bind(scope, handler));
              handler();
            }
          };
        });

    AnguController.$inject = ['$scope','$rootScope','$anchorScroll','$location','$state','CONFIG'];

}());
