(function () {
    'use strict';

    angular.module('svccApp')
        .filter('sessionLevels', function sessionLevelFilter() {
            return function (sessionLevel) {
                switch (sessionLevel) {
                    case 1:
                        return 'Beginner';
                    case 2:
                        return 'Intermediate';
                    case 3:
                        return 'Advanced';
                    default:
                        return 'unknown level';
                }
            };
        });
}());