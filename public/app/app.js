(function () {
    'use strict';


    var svccApp = angular.module('svccApp', [
        'ngRoute',
        'ngMessages',
        'ngResource'
    ]);



    svccApp.config(['$routeProvider', '$locationProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/general/home.html',
                    controller: 'GeneralController as vm'
                }).
                when('/register', {
                    templateUrl: 'app/account/registration.html',
                    controller: 'RegistrationController as vm'
                }).
                when('/login', {
                    templateUrl: 'app/account/login.html',
                    controller: 'LoginController as vm'
                }).
                when('/about', {
                    templateUrl: 'app/general/about.html',
                    controller: 'GeneralController as vm'
                }).

                // speakers
                when('/speakers/:id', {
                    templateUrl: 'app/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm'
                }).
                when('/speakers', {
                    templateUrl: 'app/speakers/speakers.html',
                    controller: 'SpeakersController as vm'
                }).

                // sessions
                when('/sessions/:id', {
                    templateUrl: 'app/sessions/session-detail.html',
                    controller: 'SessionDetailController as vm'
                }).
                when('/sessions', {
                    templateUrl: 'app/sessions/sessions.html',
                    controller: 'SessionsController as vm'
                }).


                otherwise({
                    redirectTo: '/'
                });

            //$locationProvider.html5Mode(true);

        }]);

    svccApp.run(function($rootScope) {


        $rootScope.loginName = 'zzz';



    });


    // https://blog.mariusschulz.com/2014/10/22/asynchronously-bootstrapping-angularjs-applications-with-server-side-data


    // for now I can not get bootstrapping working
    //fetchData().then(bootstrapApplication);


    function fetchData() {


        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');

        //console.log('fetchData called');
        return $http.post('/rpc/Account/isLoggedIn').then(function (response) {
            console.log('error from isLoggedIn Post. length returned: ' + response.data.length);
            //svccApp.value('configData', angular.fromJson(response.data));


        }, function (errorResponse) {
            console.log('error from isLoggedIn Post');
            // Handle error case
        });
    }


    function bootstrapApplication() {
        angular.element(document).ready(function () {

            //document.getElementById('svccApp').style.display = 'none';
            console.log('bootstrapApplication called');
            var appDiv = document.getElementById('svccApp');
            angular.bootstrap(angular.element(appDiv), ['svccApp']);



            //var appDiv = document.getElementById('svccApp');
            //setTimeout(function () {
            //    angular.bootstrap(angular.element(appDiv), ['svccApp']);
            //    //document.getElementById('initializing').set
            //    //console.log('angular started');
            //}, 4000);
        });
    }


}());