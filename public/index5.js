(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ui.router'
    ]);


    app.config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider, $q, $timeout) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('about', {
                    url: '/about',
                    template: '<p ui-view="">...loading...</p>',
                    controller: function ($state) {





                        $state.go("about.child");
                    }
                })
                .state('about.child', {
                    template: '<p>about here title: {{vm.title}}</p>',  //'index4template.html',
                    controller: 'AboutController as vm',
                    resolve: {
                        title: function ($timeout) {
                            return $timeout(function () {
                                    return 'from title function';
                                }, 2500
                            );
                        }
                    }
                });
        }]);


    var injectParamsAbout = ['title'];
    var AboutController = function (title) {
        var vm = this;
        vm.title = title;
    };
    AboutController.$inject = injectParamsAbout;
    angular.module('svccApp').controller('AboutController', AboutController);

    var injectParamsHome = [];
    var HomeController = function () {
    };
    HomeController.$inject = injectParamsHome;
    angular.module('svccApp').controller('HomeController', HomeController);


}());



