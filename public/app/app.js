(function () {
    'use strict';


    var app = angular.module('baseApp', [
        'ngMessages',
        'ngResource',
        'ui.router',
        'pusher-angular',
        'svccApp'
        //'ngMockE2E'
        //'speakerResourceServiceMock',
        //'accountInfoServiceMock'

    ]);

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            //http://www.algoworks.com/blog/a-developers-guide-to-perform-seo-on-angularjs-web-apps/
            //https://prerender.io/js-seo/angularjs-seo-get-your-site-indexed-and-to-the-top-of-the-search-results/
            //$locationProvider.hashPrefix('!');
            //$locationProvider.html5Mode(true);
            //$urlRouterProvider.otherwise('/');


            $stateProvider

                /*----------------svcc-----------*/
                .state('svcc', {
                    url: '',
                    templateUrl: 'app/svcc/miscpages/svcc.html',
                    controller: function ($scope) {
                    }
                })
                .state('svcc.about', {
                    url: '/about',
                    templateUrl: 'app/svcc/miscpages/about.html'
                })
                .state('svcc.home', {
                    templateUrl: 'app/svcc/miscpages/home.html',
                    controller: 'HomeController as vm',
                    resolve: {
                        speakers: ['speakerResourceService', function (speakerResourceService) {
                            return speakerResourceService.query().$promise;
                        }],
                        speakerUrls: ['speakerUrlResourceService', function (speakerUrlResourceService) {
                            return speakerUrlResourceService.query().$promise;
                        }]
                    }
                })
                .state('svcc.register', {
                    url: '/register',
                    templateUrl: 'app/svcc/account/registration.html',
                    controller: 'RegistrationController as vm'
                }).
                state('svcc.login', {
                    url: '/login',
                    templateUrl: 'app/svcc/account/login.html',
                    controller: 'LoginController as vm'
                }).
                state('svcc.logout', {
                    url: '/logout',
                    templateUrl: 'app/svcc/general/home.html',
                    controller: 'LogoutController as vm'
                }).

                // speakers
                state('svcc.speakers', {
                    url: '/speakers',
                    templateUrl: 'app/svcc/speakers/speakers.html',
                    controller: 'SpeakersController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speakers: ['speakerResourceService', function (speakerResourceService) {
                            return speakerResourceService.query().$promise;
                        }]
                    }
                }).

                // TODO: THIS NEEDS TO HAVE CHECK FOR IN CLIENTSIDE CACHE LIKE svcc.speakeryearname
                state('svcc.speakerid', {
                    //parent: 'svcc.speakers',
                    url: '/speaker/:id',
                    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speaker: ['speakerResourceService', '$stateParams', 'speakerDataModelUrlService',
                            function (speakerResourceService, $stateParams, speakerDataModelUrlService) {
                                //debugger;
                                var presenterId = 0;
                                if (!isNaN($stateParams.id)) {
                                    presenterId = $stateParams.id;
                                } else {
                                    // first-last-presenterId
                                    var speakerUrls = speakerDataModelUrlService.getData();
                                    var urlValue = $stateParams.id.toLowerCase();
                                    var pos1 = speakerUrls.indexOf(urlValue);
                                    if (pos1 !== -1) {
                                        var speaker = speakerUrls[pos1];
                                        presenterId = speaker.presenterId;
                                    }
                                }
                                return speakerResourceService.get({id: presenterId}).$promise;
                            }]
                    }
                }).

                state('svcc.speakeryearname', {
                    //parent: 'svcc.speakers',
                    url: '/speaker/:year/:name',
                    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        // NEED TO PUT THIS IN MULTIHOME TO GET SPEAKERS CACHED WHEN SITE LOADS
                        //speakers: ['speakerResourceService', function (speakerResourceService) {
                        //    return speakerResourceService.query().$promise;
                        //}],
                        speaker: ['speakerResourceService', '$stateParams', 'speakerDataModelService', 'speakerDataModelUrlService', '$q',
                            function (speakerResourceService, $stateParams, speakerDataModelService, speakerDataModelUrlService, $q) {

                                var presenterId = 0;
                                var urlPostToken = '';
                                var urlString  = $stateParams.year + '/' + $stateParams.name.toLowerCase();
                                var speakerUrls = speakerDataModelUrlService.getData();
                                var i;
                                for (i = 0; i < speakerUrls.length; i++) {
                                    if (speakerUrls[i].presenterUrl.indexOf(urlString) !== -1) {
                                        presenterId = speakerUrls[i].presenterId;
                                        urlPostToken = speakerUrls[i].urlPostToken;
                                    }
                                }
                                var speakerData = speakerDataModelService.findOne(presenterId, urlPostToken);
                                // check and see if data is is in cache, if not then get from server
                                if (speakerData && speakerData.id) {
                                    // need to return promise of data just like the $resource does on else here
                                    var deferred = $q.defer();
                                    deferred.resolve(speakerData);
                                    return deferred.promise;
                                } else {
                                    return speakerResourceService.get(
                                        {
                                            name: $stateParams.name,
                                            urlPostToken: $stateParams.year
                                        }
                                    ).$promise;
                                }
                            }]
                    }
                }).

                //state('svcc.speakername', {
                //    //parent: 'svcc.speakers',
                //    url: '/speaker/:name',
                //    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', 'speakerDataModelService', '$stateParams',
                //            function (speakerResourceService, speakerDataModelService, $stateParams) {
                //                debugger;
                //                var speakerData = speakerDataModelService.findOne($stateParams.id)
                //                // check and see if data is is in cache, if not then get from server
                //                if (speakerData !== {}) {
                //                    // need to return promise of data just like the $resource does on else here
                //
                //                } else {
                //                    return speakerResourceService.get({id: $stateParams.id}).$promise;
                //                }
                //            }]
                //    }
                //}).

                //state('svcc.speakerid', {
                //    parent: 'svcc.speaker',
                //    url: '/:id',
                //    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

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


                //state('svcc.speakers', {
                //    abstract: true,
                //    url: '/speakers',
                //    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                //    template: '<div ui-view></div>'
                //}).
                //state('svcc.speaker.id', {
                //    parent: 'speaker',
                //    url: '/:id',
                //    templateUrl: 'app/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

                //state('speaker.idfeedback', {
                //    parent: 'speaker',
                //    url: '/:id/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html',
                //    controller: 'SpeakerDetailFeedbackController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

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
                        session: ['sessionResourceService', '$stateParams', function (sessionResourceService, $stateParams) {
                            return sessionResourceService.get({id: $stateParams.id}).$promise;
                        }]
                    }
                }).
                state('sessions', {
                    url: '/sessions',
                    templateUrl: 'app/sessions/sessions.html',
                    controller: 'SessionsController as vm',
                    resolve: {
                        sessionResourceService: 'sessionResourceService',
                        sessions: ['sessionResourceService', function (sessionResourceService) {
                            return sessionResourceService.query().$promise;
                        }],
                        sessionDayOfWeekResourceService: 'sessionDayOfWeekResourceService',
                        sessionDayOfWeeks: ['sessionDayOfWeekResourceService', function (sessionDayOfWeekResourceService) {
                            return sessionDayOfWeekResourceService.query().$promise;
                        }]
                    }
                }).


                /*----------------angu-----------*/

                state('angu', {
                    url: '',
                    templateUrl: 'app/angu/miscpages/angu.html',
                    controller: function ($scope) {
                    }
                }).
                state('angu.about', {
                    url: '/about',
                    templateUrl: 'app/angu/miscpages/about.html'
                }).
                state('angu.home', {
                    templateUrl: 'app/angu/miscpages/home.html'
                });

            //$locationProvider.html5Mode(true);

        }]);

    app.run(['$rootScope', function ($rootScope) {


        $rootScope.loginName = '';

        //var initInjector = angular.injector(['ng']);
        //var $http = initInjector.get('$http', '$rootScope');
        //
        ////console.log('fetchData called');
        //return $http.post('/rpc/Account/isLoggedIn').then(function (response) {
        //
        //    console.log('username: ' + response.data.attendeeResults.username);
        //
        //    //$rootScope.loginName = response.data.attendeeResults.sessionGuid;
        //    $rootScope.loginName = response.data.attendeeResults.username;
        //    $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
        //    $rootScope.$apply();
        //
        //    //angular.module('svccApp').value('configData', angular.fromJson(response.data));
        //
        //
        //    //svccApp.value('configData', angular.fromJson(response.data));
        //
        //
        //}, function (errorResponse) {
        //    console.log('error from isLoggedIn Post ' + errorResponse);
        //
        //    // Handle error case
        //});


    }]);

    /*
     app.run(function ($httpBackend, speakerDataModelService) {

     speakerDataModelService.initDummyData();

     var speakerUrl = "/rest/presenter/arrayonly";
     $httpBackend.whenGET(speakerUrl).respond(function (method, url, data) {

     console.log('app.js whenGET(speakerUrl)');


     var speakers = speakerDataModelService.getData();
     return [200, speakers, {}];
     });

     var editingRegex = new RegExp(speakerUrl + "/[0-9][0-9]*", '');
     $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {

     console.log('app.js whenGET(speakerUrl/###)');

     var speaker = {"id": 0};
     var parameters = url.split('/');
     var length = parameters.length;
     var id = parameters[length - 1];

     if (id > 0) {
     speaker = speakerDataModelService.findOne(id);
     }
     return [200, speaker, {}];
     });


     var accountInfoUrl = "/rpc/Account/IsLoggedIn";
     $httpBackend.whenGET(accountInfoUrl).respond(function (method, url, data) {
     var accountInfo = [{
     "returnStatus": "OK",
     "codeCampType": "svcc",
     "registrationWords": "To attend Angular University you <b>must be registered and have a confirmed ticket</b>.",
     "registrationClosed": false,
     "isAdmin": false,
     "eventName": "Angular University San Francisco 2014",
     "success": true,
     "okToSubmitSessions": false,
     "presentationLimit": 0,
     "sessionsSubmittedTotal": 0,
     "currentCodeCampYear": "2015sf",
     "codeCampYearId": 201,
     "showAgendaOnSchedule": true,
     "showTrackOnSession": true,
     "showRoomOnSchedule": true,
     "showSessionInterest": false,
     "scheduleAllowCheckAttend": true,
     "showSessionInterestCount": false,
     "showSessionPlanAheadCount": false,
     "submitSessionsOpen": false,
     "cloudFrontCacheServer": "x",
     "attendeesImageUrl": "/attendeeimage/20140411190526-11420.jpg",
     "attendeeResults": {
     "interestLevel": 0,
     "donationAmount": 0.0,
     "kidDonationOverride": false,
     "registeredCurrentYear": false,
     "hasSessionsCurrentYear": false,
     "volunteeredCurrentYear": false,
     "attendeesId": 11420,
     "saturdayClasses": false,
     "hasLedgerEntriesCurrentCodeCampYear": false,
     "allowPartialSessionEdit": false,
     "allowFullSessionEdit": false,
     "pkid": "00000000-0000-0000-0000-000000000000",
     "username": "test77",
     "applicationName": "",
     "email": "pkellner99@gmail.com",
     "comment": "",
     "password": "",
     "passwordQuestion": "",
     "passwordAnswer": "",
     "isApproved": true,
     "lastActivityDate": "2014-12-22T17:32:36Z",
     "lastLoginDate": "2014-12-22T17:32:36.11Z",
     "creationDate": "2013-09-03T22:00:20.107Z",
     "isLockedOut": false,
     "lastLockedOutDate": "2013-09-03T22:00:20.107Z",
     "failedPasswordAttemptCount": 1,
     "failedPasswordAttemptWindowStart": "2014-09-22T16:56:50.05Z",
     "failedPasswordAnswerAttemptCount": 0,
     "failedPasswordAnswerAttemptWindowStart": "2013-09-03T22:00:20.107Z",
     "lastPasswordChangedDate": "2013-09-03T22:00:20.107Z",
     "userWebsite": "http://biohazard.com",
     "userFirstName": "Joe",
     "userLastName": "Plumber",
     "userZipCode": "asdfsadfsdf",
     "userBio": "This is a bio for Joe The Plumber. Here it is again.  Go for it!  Now is the time for all good men to come to the aid of their country.  Why do I still see red?",
     "fullNameUsernameZipcode": "",
     "phoneNumber": "4082341385",
     "allowEmailToSpeakerPlanToAttend": false,
     "allowEmailToSpeakerInterested": false,
     "qrEmailAllow": true,
     "shirtSize": "Mens-S",
     "twitterHandle": "@joetheplumber",
     "optInSponsoredMailingsLevel": 1,
     "optInSponsorSpecialsLevel": 1,
     "city": "asdfsdfsdfs",
     "state": "asdfsadf",
     "presentationLimit": 0,
     "presentationApprovalRequired": true,
     "company": "My Big Company",
     "principleJob": "xxx",
     "optInSvccKids": "1",
     "lastUpdateDate": "2014-04-11T19:05:26.093Z",
     "sessionGuid": "5a181f04-2a0b-4a01-a186-cbdeb17a7cff",
     "sessionGuidExpiration": "2015-01-06T01:32:36.1933338Z",
     "meetupShareInfo": true,
     "allowAttendeeToEmailMe": false,
     "userBioShort": "This is a bio for Joe The Plumber. Here it is again.",
     "workStudyInterest": false,
     "donationOnHonorRoll": false,
     "isKid": false,
     "kidBirthYear": 0,
     "notificationLevel": "interestedandplantoattend",
     "notificationDestinationText": true,
     "notificationDestinationEmail": true,
     "id": 11420
     }
     }];
     return [200, accountInfo, {}];
     });

     // Pass through any requests for application files
     $httpBackend.whenGET(/app/).passThrough();


     });
     */


}());