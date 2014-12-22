(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ui.router'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider,$q,$timeout) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('init', {
                    url: '/',
                    template: '<p>initialization</p>',
                    controller: 'InitController as vm'
                }).
                state('ready', {
                    url: '/about',
                    template:   '<p>ready</p>',
                    controller: 'ReadyController as vm',

                    resolve: {
                        app: function ($q, $timeout) {
                            var defer = $q.defer;
                            // this will be http that gets init data
                            $timeout(function () {
                                console.log('timeout completed')
                                defer.resolve();
                            }, 3000);
                            return defer.promise;
                        }
                    }
                });
        }]);


    /*-----------------------------------------*/

    var injectParamsHome = [];
    var HomeController = function () {
    };
    HomeController.$inject = injectParamsHome;
    angular.module('svccApp').controller('HomeController', HomeController);


    var injectParamsAbout = ['title'];
    var AboutController = function (title) {
    };
    AboutController.$inject = injectParamsAbout;
    angular.module('svccApp').controller('AboutController', AboutController);

    /*-----------------------------------------*/

    var injectParamsInit = [];
    var InitController = function () {



    };
    HomeController.$inject = injectParamsInit;
    angular.module('svccApp').controller('InitController', InitController);



    var injectParamsReady = ['$urlRouter'];
    var ReadyController = function ($stateProvider) {

        debugger;
        $stateProvider
            .state('home', {
                url: '/',
                template: '<p>HOME HERE</p>',
                controller: 'HomeController as vm'
            }).
            state('about', {
                url: '/about',
                template:   '<p>about controller</p>',  //'index4template.html',
                controller: 'AboutController as vm'
            });
    };
    ReadyController.$inject = injectParamsReady;
    angular.module('svccApp').controller('ReadyController', ReadyController);

    /*-----------------------------------------*/


}());



