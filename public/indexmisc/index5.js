(function () {
    'use strict';

    var app = angular
            .module('svccApp', [
                'ui.router'
            ])
            .config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider.otherwise('/home');

                    // States
                    $stateProvider
                        .state('other', {
                            url: "/other",
                            templateUrl: 'tpl.html'
                        });
                }
            ])
        ;
    app.controller('myController', function ($scope,$stateParams) {
        console.log("fromMyController" + $stateParams.id);
    });

    var myConstant = {};
    myConstant.codeCampType = "svcc";
    app.constant("CONFIG", myConstant);

    app.config(['$stateProvider', '$urlRouterProvider','CONFIG',
        function ($stateProvider, $urlRouterProvider,CONFIG) {
            console.log('CONFIG.codeCampType: ' + CONFIG.codeCampType);
            console.log(myConstant.codeCampType);
            debugger;
            $stateProvider
                .state('home', {
                    url: '/home',
                    //templateUrl: 'index5templateA.html',   (THIS WORKS)
                    templateProvider: function(CONFIG, $http, $templateCache) {
                        console.log('in templateUrl ' + CONFIG.codeCampType);

                        var templateName = 'index5templateB.html';

                        if (CONFIG.codeCampType === "svcc") {
                            templateName = 'index5templateA.html';
                        }
                        var tpl = $templateCache.get(templateName);

                        if(tpl){
                            return tpl;
                        }

                        return $http
                            .get(templateName)
                            .then(function(response){
                                tpl = response.data
                                $templateCache.put(templateName, tpl);
                                return tpl;
                            });
                    },
                    controller: function ($state) {
                    }
                });
        }]);








}());



