(function () {
    'use strict';


    var svccApp = angular.module('svccApp', [
        'ngRoute',
        'ngMessages',
        'ngResource'
    ]);

    svccApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/general/home.html',
                    controller: 'GeneralController as vm'
                }).
                when('/register', {
                    templateUrl: 'app/registration/registration.html',
                    controller: 'RegistrationController as vm'
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
        }]);

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

    //angular.module('sessionDetailController',
    //    ['ngRoute', 'ngResource'])

    angular.module('svccApp')
        .filter('sessionLevels', function sessionLevelFilter() {
            return function (sessionLevel) {
                switch (sessionLevel) {
                    case 1:
                        return "Beginner";
                    case 2:
                        return "Intermediate";
                    case 3:
                        return "Advanced";
                    default:
                        return "unknown level";
                }
            };
        })
        .controller('SessionDetailController', SessionDetailController);

    function SessionDetailController($routeParams, sessionResourceService) {
        var vm = this;
        vm.sessions = [];

        sessionResourceService.query(function (sessionsx) {
            angular.forEach(sessionsx, function (value) {
                if (String(value.id) === $routeParams.id) {
                    vm.sessions.push(value);
                }
            });
            if (vm.sessions.length > 0) {
                vm.session = vm.sessions[0];
            }
        });


        vm.onClick = function (myId) {
            alert('clicked ' + myId);
        };

        //            vm.orderProp = "lastName";

    }

    SessionDetailController.$inject = ["$routeParams", "sessionResourceService"];

}());
(function () {
    'use strict';

    angular.module('svccApp').
        factory('sessionResourceService', sessionResourceService);

    function sessionResourceService($resource) {
        //return $resource("/rest/session?arrayOnly=true");
        return $resource('data/sessions.json');
    }

    sessionResourceService.$inject = ['$resource'];


}());
(function () {
    'use strict';

    angular.module('svccApp')
        .controller('SessionsController', SessionsController);

    function SessionsController($scope, sessionResourceService) {
        var vm = this;

        //$scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
        vm.sessions = sessionResourceService.query();

        //vm.onClick = function (myId) {
        //    alert('clicked ' + myId);
        //};

        vm.orderProp = 'title';

    }

    SessionsController.$inject = ['$scope', 'sessionResourceService'];


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
        })
        .controller('SpeakerDetailController', SpeakerDetailController);

    //SpeakerDetailController.inject = ['svccApp','ngRoute', 'speakerResourceService'];

    function SpeakerDetailController($routeParams,speakerResourceService) {

        var vm = this;
        vm.speakers = [];
        speakerResourceService.query(function (speaker) {
            angular.forEach(speaker, function (value) {
                if (String(value.id) === $routeParams.id) {
                    vm.speakers.push(value);
                }
            });
            if (vm.speakers.length > 0) {
                vm.speaker = vm.speakers[0];
            }

        });
    }
    SpeakerDetailController.$inject = ['$routeParams', 'speakerResourceService'];

}());

(function () {
    'use strict';

    angular.module('svccApp')
        .factory('speakerResourceService',['$resource',
        function ($resource) {
            //return $resource("/rest/presenter?arrayOnly=true");
            return $resource('data/speakers.json');
        }]);

}());
(function () {
    'use strict';

    angular.module('svccApp')
        .directive('speakerSocialIconDirective', speakerSocialIconDirective);
    function speakerSocialIconDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'app/components/speaker-social-icon.directive.html',
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



    function SpeakersController(speakerResourceService) {
        var vm = this;
        vm.speakers = speakerResourceService.query();
    }

    SpeakersController.$inject = ['speakerResourceService'];

}());