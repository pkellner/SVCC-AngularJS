
(function () {
    'use strict';

    angular.module('baseApp')
        .controller('AnguController', AnguController);

    function AnguController($scope,$rootScope,$anchorScroll,$location,$state,CONFIG) {
        $rootScope.baseDir = CONFIG.baseDir;

        $scope.anguPingMe = function () {
            $rootScope.pingMeEmailAddress = $scope.pingMeEmailAddress;
            $state.transitionTo('base.angupingmeonfirmation');
        };

        $scope.backToHomePage = function () {
            $state.transitionTo('base.home');
        };

        $scope.scrollTo = function (section) {
            $location.hash(section);
            // based on http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
            var windowHeight = window.innerHeight;
            var startY = currentYPosition();
            var stopY = elmYPosition(section);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            var speed = Math.min(Math.round(distance / 100), 20);
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;

            if (stopY > startY) {
                scrollDown();
            } else {
                scrollUp();
            }

            function scrollDown() {
                for (var i = startY; i < stopY; i += step) {
                    setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
                    leapY += step;
                    if (leapY > stopY) {
                        leapY = stopY;
                    }
                    timer++;
                }
            }

            function scrollUp() {
                for (var j = startY; j > stopY; j -= step) {
                    setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
                    leapY -= step;
                    if (leapY < stopY) {
                        leapY = stopY;
                    }
                    timer++;
                }
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(section) {
                var elm = document.getElementById(section);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent !== document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y - windowHeight/3;
            }
        };

    }

    angular.module('baseApp')
        .directive('ngWaypoint', function($window) {
          return {
            scope: {
              scroll: '=scrollPosition',
              activeNavSection: '=activeNavSection'
            },
            link: function(scope, element, attrs) {
              var windowEl = angular.element($window);
              var navSections = angular.element(document.querySelectorAll('.nav--section'));
              var windowHeight = $window.innerHeight;
              var handler = function () {
                scope.scroll = $window.scrollY + windowHeight/3;
                for (var i = 0; i < navSections.length; i++) {
                    if (scope.scroll > navSections[i].offsetTop) {
                        scope.activeNavSection = navSections[i].id;
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
