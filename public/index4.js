(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ui.router'
    ]);


    app.config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<p>HOME HERE</p>',
                    controller: 'HomeController as vm'
                }).
                state('about', {
                    url: '/about',
                    template:   '<p>about here title: {{vm.title}}</p>',  //'index4template.html',
                    controller: 'AboutController as vm',

                    resolve: {

                        title: function(){
                            return 'from title function';
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



