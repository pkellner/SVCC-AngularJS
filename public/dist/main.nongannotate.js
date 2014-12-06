(function () {
    'use strict';


    var app = angular.module('svccApp', [
        'ngMessages',
        'ngResource',
        'ui.router'
    ]);



    app.config(['$stateProvider','$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/general/home.html',
                    controller: 'GeneralController as vm'
                }).
                state('register', {
                    url: '/register',
                    templateUrl: 'app/account/registration.html',
                    controller: 'RegistrationController as vm'
                }).
                state('login', {
                    url: '/login',
                    templateUrl: 'app/account/login.html',
                    controller: 'LoginController as vm'
                }).
                state('logout', {
                    url: '/logout',
                    templateUrl: 'app/general/home.html',
                    controller: 'LogoutController as vm'
                }).
                state('about', {
                    url: '/about',
                    templateUrl: 'app/general/about.html',
                    controller: 'GeneralController as vm'
                }).

                // speakers
                state('speakers', {
                    url: '/speakers',
                    templateUrl: 'app/speakers/speakers.html',
                    controller: 'SpeakersController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speakers: function(speakerResourceService) {
                            return speakerResourceService.query().$promise;
                        }
                    }
                }).

                //state('speaker', {
                //    url: '/speaker/:id',
                //    templateUrl: 'app/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: function(speakerResourceService,$stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }
                //    }
                //}).


                state('speaker', {
                    abstract: true,
                    url: '/speaker',
                    //templateUrl: 'app/speakers/speaker-detail.html'
                    template: '<div ui-view></div>'
                }).
                state('speaker.id', {
                    parent: 'speaker',
                    url: '/:id',
                    templateUrl: 'app/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speaker: function(speakerResourceService,$stateParams) {
                            return speakerResourceService.get({id: $stateParams.id}).$promise;
                        }
                    }
                }).

                state('speaker.idfeedback', {
                    parent: 'speaker',
                    url: '/:id/feedback',
                    templateUrl: 'app/speakers/speaker-detail-feedback.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speaker: function(speakerResourceService,$stateParams) {
                            return speakerResourceService.get({id: $stateParams.id}).$promise;
                        }
                    }
                }).

                //state('speaker.feedback', {
                //    parent: '/speaker',
                //    url: '/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html'
                //}).


                //state('speaker.feedback', {
                //    url: '/:id/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html'
                //}).


                //sessions
                state('sessiondetail', {
                    url: '/sessions/:id',
                    templateUrl: 'app/sessions/session-detail.html',
                    controller: 'SessionDetailController as vm',
                    resolve: {
                        sessionResourceService: 'sessionResourceService',
                        session: function(sessionResourceService,$stateParams) {
                            return sessionResourceService.get({id: $stateParams.id}).$promise;
                        }
                    }
                }).
                state('sessions', {
                    url: '/sessions',
                    templateUrl: 'app/sessions/sessions.html',
                    controller: 'SessionsController as vm',
                    resolve: {
                        sessionResourceService: 'sessionResourceService',
                        sessions: function(sessionResourceService) {
                            return sessionResourceService.query().$promise;
                        }
                    }
                });

            //$locationProvider.html5Mode(true);

        }]);

    app.run(function($rootScope) {


        $rootScope.loginName = '';

        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http','$rootScope');

        //console.log('fetchData called');
        return $http.post('/rpc/Account/isLoggedIn').then(function (response) {

            console.log('username: ' + response.data.attendeeResults.username);

            //$rootScope.loginName = response.data.attendeeResults.sessionGuid;
            $rootScope.loginName = response.data.attendeeResults.username;
            $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
            $rootScope.$apply();

            //angular.module('svccApp').value('configData', angular.fromJson(response.data));



            //svccApp.value('configData', angular.fromJson(response.data));


        }, function (errorResponse) {
            console.log('error from isLoggedIn Post ' + errorResponse);
            // Handle error case
        });



    });


    // https://blog.mariusschulz.com/2014/10/22/asynchronously-bootstrapping-angularjs-applications-with-server-side-data


    // for now I can not get bootstrapping working
    //fetchData().then(bootstrapApplication);
    //fetchData();

    function fetchData() {


        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http','$rootScope');

        //console.log('fetchData called');
        return $http.post('/rpc/Account/isLoggedIn').then(function (response) {

            console.log('error from isLoggedIn Post. length returned: ' + response.data.length);
            angular.module('svccApp').value('configData', angular.fromJson(response.data));



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
(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LoginController', LoginController);
    function LoginController($http,$window,$rootScope) {
        var vm = this;
        vm.login = {};

        vm.login.submitForm = function () {
            // username=asdf&password=adsf&rememberMe=false
            $http({
                method: 'POST',
                url: '/rpc/account/login',
                data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data,status,headers,config) {
                $http.post('/rpc/Account/isLoggedIn').then(function (response) {
                    console.log('error from isLoggedIn Post. length returned: ' + response.data.length);
                    angular.module('svccApp').value('configData', angular.fromJson(response.data));
                    $rootScope.loginName = response.data.attendeeResults.username;
                    $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
                });

                $window.location = '#/';
            }).error(function(data,status,header,config){
                $window.location = '#/about';
            });

        };


        LoginController.$inject = ['$http','$window','$rootScope'];

    }
})();



(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.controller('LogoutController', LogoutController);
    function LogoutController($http, $window, $rootScope) {
        var vm = this;
        vm.login = {};


        $http({
            method: 'POST',
            url: '/rpc/account/LogOut'
            //data: 'username=' + vm.login.username + '&' + 'password=' + vm.login.password,
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
            $rootScope.sessionGuid = null;
            $rootScope.loginName = null;
            $window.location = '#/';
        }).error(function (data, status, header, config) {
            $window.location = '#/about';
        });

        LogoutController.$inject = ['$http', '$window', '$rootScope'];

    }
})();



(function () {
    'use strict';

    var app = angular.module('svccApp');

    app.directive('compareTo', function () {
        return {
            require: 'ngModel',
            scope: {
                otherModelValue: '=compareTo'
            },
            link: function (scope, element, attributes, ngModel) {
                ngModel.$validators.compareTo = function (modelValue) {
                    return !(scope.otherModelValue === 'none' && modelValue === true);
                };
                scope.$watch('otherModelValue', function () {
                    ngModel.$validate();
                });
            }
        };
    });

    app.controller('RegistrationController', RegistrationController);
    function RegistrationController($scope, $http) {
        var vm = this;
        vm.registration = {
            firstName: 'George',
            lastName: 'Bush',
            email: 'george@whitehouse.gov',
            notificationDestinationText: true,
            notificationLevel: 'allsessions'
        };

        vm.registration.submitForm = function () {
            var config = {
                params: {
                    data: vm.registration
                }
            };
            $http.post('someserver.php', null, config)
                .success(function () {
                    //alert('success');
                })
                .error(function () {
                    //alert('failure');
                });

        };
    }

    RegistrationController.$inject = ['$scope', '$http'];

}());


(function () {
    'use strict';

    angular.module('svccApp')
        .controller('GeneralController', GeneralController);

    function GeneralController() {
    }

}());

(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController(session) {
        var vm = this;
        vm.sessions = [session];
        vm.session = session;
    }

    SessionDetailController.$inject = ['session'];

}());

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
(function () {
    'use strict';

    angular.module('svccApp').
        factory('sessionResourceService', sessionResourceService);

    function sessionResourceService($resource) {
        return $resource('/rest/session/arrayonly/:id');
        //return $resource('data/sessions.json');
    }

    sessionResourceService.$inject = ['$resource'];


}());
(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SessionsController', SessionsController);



    function SessionsController(sessions) {
        var vm = this;
        vm.sessions = sessions;
    }

    SessionsController.$inject = ['sessions'];

}());
(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SpeakerDetailController', SpeakerDetailController);

    function SpeakerDetailController(speaker, $http) {
        var vm = this;
        vm.speakers = [speaker];
        vm.speaker = speaker;


        $http.get('/rest/discussion/arrayonly',
            {
                params: {
                    speakerId: this.speaker.id,
                    arrayonly: 1
                }
            })
            .success(function (data) {
                vm.discussions = data[0].discussionItemResults;
            })
            .error(function () {

            });


        // POST the message if it exists and refresh the list with results (including one just posted)
        vm.discussionSendText = function () {

            if (this.messageText && this.messageText.length > 0) {
                $http.post('/rest/discussion/arrayonly',
                    {
                        messageText: this.messageText,
                        speakerId: this.speaker.id,
                        publicMessage: this.publicMessage,
                        arrayonly: 1
                    })
                    .success(function () {
                        $http.get('/rest/discussion/arrayonly',
                            {
                                params: {
                                    speakerId: vm.speaker.id,
                                    arrayonly: 1
                                }
                            })
                            .success(function (data) {
                                vm.discussions = data[0].discussionItemResults;
                            })
                            .error(function () {

                            });
                    });
            }

        };

    }

    SpeakerDetailController.$inject = ['speaker', '$http'];

}());

(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerResourceService',['$resource',
        function ($resource) {
            return $resource('/rest/presenter/arrayonly/:id');
            //return $resource('data/speakers.json');
        }]);
}());
(function () {
    'use strict';

    angular.module('svccApp')
        .directive('speakerSocialIconDirective', speakerSocialIconDirective);
    function speakerSocialIconDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'app/speakers/speaker-social-icon.directive.html',
            scope: {
                speaker: '='
            }
        };
    }

}());

(function () {

    'use strict';

    angular
        .module('svccApp')
        .controller('SpeakersController', SpeakersController);



    function SpeakersController(speakers) {
        var vm = this;
        vm.speakers = speakers;
    }

    SpeakersController.$inject = ['speakers'];

}());