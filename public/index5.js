(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ui.router'
    ]);

    var myConstant = {};
    myConstant.codeCampType = "svcc";
    app.constant("CONFIG", myConstant);

    app.config(['$stateProvider', '$urlRouterProvider','CONFIG',
        function ($stateProvider, $urlRouterProvider,CONFIG) {
            console.log(CONFIG.codeCampType);
            $stateProvider
                .state('home', {
                    url: '/home',
                    //templateUrl: 'index5templateA.html',   (THIS WORKS)
                    templateUrl: function(CONFIG) {
                        console.log('in templateUrl ' + CONFIG.codeCampType);
                        if (CONFIG.codeCampType === "svcc") {
                            return 'index5templateA.html';
                        } else {
                            return 'index5templateB.html';
                        }
                    },
                    controller: function ($state) {
                    }
                });
        }]);
}());



