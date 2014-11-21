(function () {
    'use strict';


    var svccApp = angular.module('svccApp', [
        'ngRoute',
        'ngMessages',
        'ngResource'
    ]);

    svccApp.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
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

}());