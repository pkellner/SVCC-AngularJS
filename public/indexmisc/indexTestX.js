(function() {
    'use strict';

    var myAppModule = angular.module('myApp', []);
    myAppModule.service('testService', function (testService) {
    });
    myAppModule.config(['testService',
        function (testService) {
        }]);

})();