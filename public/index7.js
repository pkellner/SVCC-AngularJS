    (function () {
        'use strict';


        var baseApp = angular.module('baseApp', []);
        baseApp.service('testService', function () {
            this.myData = function () {
                return [1, 2, 3, 4];
            }
        });
        baseApp.controller('myBaseController', function (testService) {
            var x = testService.myData();
            console.log('baseApp ' + x.length);
        });


        var mainApp = angular.module('mainApp', ['baseApp']);
        mainApp.controller('myMainController',['testService', function (testService) {
            debugger;
            var y = testService.myData();
            console.log('mainApp ' + y.length);
        }]);


    }());



