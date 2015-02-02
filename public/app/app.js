(function () {
    'use strict';

    var depArray = [
        'ngMessages',
        'ngResource',
        'ui.router',
        'pusher-angular',
        'ui.bootstrap',
        'angular-carousel',
        'duScroll'
    ];

    if (window.usingMockDataGlobal) {
        depArray.push('ngMockE2E');
    }

    var app = angular.module('baseApp', depArray);

    app.factory('getTemplate', ['CONFIG', '$templateRequest', function(CONFIG, $templateRequest) {
        return function(templateMask) {
            var codeCampType = CONFIG.codeCampType;
            var templateName = CONFIG.baseDir + templateMask.replace(/\{0\}/g, codeCampType);
            return $templateRequest(templateName);
        };
    }]);

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'CONFIG',

        function ($stateProvider, $urlRouterProvider, $locationProvider, CONFIG) {

            $stateProvider
                .state('base', {
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/miscpages/{0}.html');
                    }],
                    controller: 'HomeController as vm',
                    resolve: {
                        faqs: ['$http', 'faqDataModelService', function ($http, faqDataModelService) {
                            return $http.get('/rest/faq/arrayonly/', {
                                cache: true
                            })
                            .success(function (data, status, headers, config) {
                                // only reload this service if it is empty. It can be full from previous production call or from
                                // testing environment load.
                                if (!faqDataModelService.hasData()) {
                                    faqDataModelService.setData(data);
                                }
                                return data;
                            })
                            .error(function (data, status, headers, config) {
                                return [];
                            });
                        }],
                        sponsors: ['$http', 'sponsorDataModelService', function ($http, sponsorDataModelService) {
                            return $http.get('/rest/sponsor/arrayonly/', {
                                cache: true
                            })
                            .success(function (data, status, headers, config) {
                                // only reload this service if it is empty. It can be full from previous production call or from
                                // testing environment load.
                                if (!sponsorDataModelService.hasData()) {
                                    sponsorDataModelService.setData(data);
                                }
                                return data;
                            })
                            .error(function (data, status, headers, config) {
                                return [];
                            });
                        }]

                    }
                })
                .state('base.home', {
                    //templateUrl: 'app/svcc/miscpages/svcchome.html'
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/miscpages/{0}home.html');
                    }]
                })
                .state('base.about', {
                    url: '/about',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/miscpages/about.html');
                    }]
                })
                .state('base.login', {
                    url: '/login',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/account/login.html');
                    }],
                    controller: 'LoginController as vm'
                }).
                state('base.logout', {
                    url: '/logout',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/miscpages/{0}home.html');
                    }],
                    controller: 'LogoutController as vm'
                })
                .state('base.register', {
                    url: '/register',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/account/registration.html');
                    }],
                    controller: 'RegistrationController as vm'
                })
                .state('base.speakers', {
                    url: '/speakers',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/speakers/speakers.html');
                    }],
                    controller: 'SpeakersController as vm',
                    resolve: {
                        speakers: ['$http', 'speakerDataModelService', function ($http, speakerDataModelService) {
                            var promise =
                                $http.get('/rest/presenter/arrayonly/', {
                                    cache: true
                                }).
                                    success(function (data, status, headers, config) {
                                        // only reload this service if it is empty. It can be full from previous production call or from
                                        // testing environment load.
                                        if (!speakerDataModelService.hasData()) {
                                            speakerDataModelService.setData(data);
                                        }
                                        return data;
                                    }).
                                    error(function (data, status, headers, config) {
                                        return [];
                                    });
                            return promise;
                        }]

                    }
                })

                .state('base.speakeryearname', {
                    url: '/speaker/:year/:name',
                    //templateUrl: 'app/svcc/speakers/speaker-detail.html',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/speakers/speaker-detail.html');
                    }],
                    controller: 'SpeakerDetailController as vm',
                    resolve: {

                        //todo needhelp   move this mess here under speaker into it's own service
                        speaker: ['$stateParams', '$http', 'speakerDataModelService','$q',
                            function ($stateParams, $http, speakerDataModelService,$q) {
                                var partialUrl = $stateParams.year + '/' + $stateParams.name.toLowerCase();
                                var speaker;
                                if (speakerDataModelService.hasData()) {
                                    var localData = speakerDataModelService.getData();
                                    var i;
                                    for (i = 0; i < localData.length; i++) {
                                        if (localData[i].presenterUrl === partialUrl) {
                                            speaker = localData[i];
                                            break;
                                        }
                                    }
                                }

                                // if we find the speaker, return a promise with the data wrapped, otherwise do the rest call
                                if (speaker) {
                                    return $q.when({ data: speaker});
                                } else {
                                    var urlString = '/rest/presenter/arrayonly/' + partialUrl;
                                    return $http.get(urlString, {cache: true})
                                        .success(function (data, status, headers, config) {
                                            return data;
                                        })
                                        .error(function (data, status, headers, config) {
                                            return {id: -1};
                                        });
                                }
                            }]
                    }
                })


                .state('base.sessiondetail', {
                    url: '/session/:year/:title',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/sessions/session-detail.html');
                    }],
                    controller: 'SessionDetailController as vm',
                    resolve: {
                        //todo needhelp   move this mess here under session into it's own service
                        session: ['$stateParams', '$http','sessionDataModelService','$q',
                            function ($stateParams, $http,sessionDataModelService,$q) {

                                var partialUrl = $stateParams.year + '?title=' + $stateParams.title.toLowerCase();
                                var urlForSessionMatch = '/Session/' + $stateParams.year + '/' + $stateParams.title.toLowerCase();

                                // localData[i].sessionUrl  "/Session/2014/creating-html5-based-apps-for-wearable-technologies"
                                // partialUrl:  "2014?title=swift-language-and-using-playgrounds"
                                //var urlForSessionMatch = $stateParams.year + '?title=' + $stateParams.title.toLowerCase();
                                var session;
                                if (sessionDataModelService.hasData()) {
                                    var localData = sessionDataModelService.getData();
                                    var i;
                                    for (i = 0; i < localData.length; i++) {
                                        if (localData[i].sessionUrl === urlForSessionMatch) {
                                            session = localData[i];
                                            break;
                                        }
                                    }
                                }

                                // if we find the speaker, return a promise with the data wrapped, otherwise do the rest call
                                if (session) {
                                    return $q.when({ data: {data: [session]}});
                                } else {


                                    var urlString = '/rest/session/' + partialUrl;
                                    // first see if this is in the local data

                                    return $http.get(urlString, {cache: true})
                                        .success(function (data, status, headers, config) {
                                            return data;
                                        })
                                        .error(function (data, status, headers, config) {
                                            return {id: -1};
                                        });
                                }
                            }]
                    }
                })

                .state('base.sessions', {
                    url: '/sessions',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/sessions/sessions.html');
                    }],
                    controller: 'SessionsController as vm',
                    resolve: {
                        sessionDayOfWeeks: ['$http', function ($http) {
                            var promise =
                                $http.get('/rest/sessiondayofweek/', {cache: true}).
                                    success(function (data, status, headers, config) {
                                        return data;
                                    }).
                                    error(function (data, status, headers, config) {
                                        return [];
                                    });
                            return promise;
                        }],
                        sessions: ['$http','sessionDataModelService', function ($http,sessionDataModelService) {
                            var promise =
                                $http.get('/rest/session/arrayonly/', {cache: true}).
                                    success(function (data, status, headers, config) {
                                        // only reload this service if it is empty. It can be full from previous production call or from
                                        // testing environment load.
                                        if (!sessionDataModelService.hasData()) {
                                            sessionDataModelService.setData(data);
                                        }
                                        return data;
                                    }).
                                    error(function (data, status, headers, config) {
                                        return [];
                                    });
                            return promise;
                        }]
                    }
                })




                .state('base.sponsors', {
                    url: '/sponsors',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/sponsors/sponsors.html');
                    }],
                    controller: 'SponsorsController as vm',
                    resolve: {
                        sponsors: ['$http', 'sponsorDataModelService', function ($http, sponsorDataModelService) {
                            var promise =
                                $http.get('/rest/sponsor/arrayonly/', {
                                    cache: true
                                }).
                                    success(function (data, status, headers, config) {
                                        // only reload this service if it is empty. It can be full from previous production call or from
                                        // testing environment load.
                                        if (!sponsorDataModelService.hasData()) {
                                            sponsorDataModelService.setData(data);
                                        }
                                        return data;
                                    }).
                                    error(function (data, status, headers, config) {
                                        return [];
                                    });
                            return promise;
                        }]

                    }
                })


                .state('base.faqs', {
                    url: '/faqxxx',
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/{0}/faqs/faqs.html');
                    }],
                    controller: 'FaqsController as vm',
                    resolve: {
                        faqs: ['$http', 'faqDataModelService', function ($http, faqDataModelService) {
                            var promise =
                                $http.get('/rest/faq/arrayonly/', {
                                    cache: true
                                }).
                                    success(function (data, status, headers, config) {
                                        // only reload this service if it is empty. It can be full from previous production call or from
                                        // testing environment load.
                                        if (!faqDataModelService.hasData()) {
                                            faqDataModelService.setData(data);
                                        }
                                        return data;
                                    }).
                                    error(function (data, status, headers, config) {
                                        return [];
                                    });
                            return promise;
                        }]

                    }
                })








                // angulur university special below:
                .state('base.angupingmeonfirmation', {
                    templateProvider: ['getTemplate', function (getTemplate) {
                        return getTemplate('app/angu/miscpages/angupingmeconfirmation.html');
                    }],
                    controller: 'AnguController'
                });

        }]);

    app.controller('MainController', ['$state', '$rootScope', function ($state, $rootScope) {
        $rootScope.hideLoadingIcon = true;
        $state.transitionTo('base.home');
    }]);


    app.run(['$rootScope', '$httpBackend',
        'sponsorDataModelService','speakerDataModelService', 'speakerDataModelUrlService',
        'sessionDataModelService', 'sessionDataModelUrlService','faqDataModelService', 'CONFIG',
        function ($rootScope, $httpBackend,sponsorDataModelService, speakerDataModelService, speakerDataModelUrlService,
                  sessionDataModelService, sessionDataModelUrlService,faqDataModelService, CONFIG) {
            $rootScope.loginName = '';

            var initUrlMocksAll = function () {


                $httpBackend.whenGET(/app/).passThrough();

                sponsorDataModelService.initDummyData();

                faqDataModelService.initDummyData();

                speakerDataModelService.initDummyData();
                speakerDataModelUrlService.initDummyData();

                sessionDataModelService.initDummyData();
                sessionDataModelUrlService.initDummyData();

                var sessionDayOfWeekUrl = "/rest/sessiondayofweek/";
                $httpBackend.whenGET(sessionDayOfWeekUrl).respond(function (method, url, data) {
                    var sessionDayOfWeekRecs =
                        [
                            {
                                "id": 1,
                                "dayOfWeek": "Show All",
                                "localClass": "showAll"
                            },
                            {
                                "id": 2,
                                "dayOfWeek": "Monday",
                                "localClass": "monday"
                            },
                            {
                                "id": 3,
                                "dayOfWeek": "Tuesday",
                                "localClass": "tuesday"
                            },
                            {
                                "id": 4,
                                "dayOfWeek": "Wednesday",
                                "localClass": "wednesday"
                            },
                            {
                                "id": 5,
                                "dayOfWeek": "Thursday",
                                "localClass": "thursday"
                            }
                        ];
                    return [200, sessionDayOfWeekRecs, {}];
                });

                var accountInfoUrl = "/rpc/Account/IsLoggedIn";
                $httpBackend.whenPOST(accountInfoUrl).respond(function (method, url, data) {

                    var accountInfo = {
                        "returnStatus": "OK",
                        "codeCampType": "angu",
                        "registrationWords": "To attend Angular University you <b>must be registered and have a confirmed ticket</b>.",
                        "registrationClosed": false,
                        "isAdmin": false,
                        "eventName": "Angular University San Francisco 2014",
                        "success": true,
                        "okToSubmitSessions": true,
                        "presentationLimit": 1,
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
                        "attendeesImageUrl": "/attendeeimage/000000000000-30464.jpg",
                        "facebookUrl": "https://www.facebook.com/siliconvalleycodecamp",
                        "googlePlusUrl": "https://plus.google.com/110656351842726857531/posts",
                        "twitterUrl": "https://www.twitter.com/sv_code_camp",
                        "eventGoogleMapUrl": "https://goo.gl/maps/uBzdM",
                        "attendeeResults": {
                            "interestLevel": 0,
                            "donationAmount": 0.0,
                            "kidDonationOverride": false,
                            "registeredCurrentYear": false,
                            "hasSessionsCurrentYear": false,
                            "volunteeredCurrentYear": false,
                            "currentCodeCampYear": 201,
                            "attendeesId": 30464,
                            "saturdayClasses": false,
                            "roleTop": "user",
                            "hasLedgerEntriesCurrentCodeCampYear": false,
                            "emailSubscription": 0,
                            "allowPartialSessionEdit": false,
                            "allowFullSessionEdit": false,
                            "pkid": "00000000-0000-0000-0000-000000000000",
                            "username": "ZZ@ANGU.COM",
                            "applicationName": "",
                            "email": "ZZ@ANGU.COM",
                            "comment": "",
                            "password": "",
                            "passwordQuestion": "",
                            "passwordAnswer": "",
                            "isApproved": true,
                            "lastActivityDate": "2015-01-29T23:27:01.973Z",
                            "creationDate": "2015-01-29T23:27:01.973Z",
                            "isLockedOut": false,
                            "lastLockedOutDate": "2015-01-29T23:27:01.973Z",
                            "failedPasswordAttemptCount": 0,
                            "failedPasswordAttemptWindowStart": "2015-01-29T23:27:01.973Z",
                            "failedPasswordAnswerAttemptCount": 0,
                            "failedPasswordAnswerAttemptWindowStart": "2015-01-29T23:27:01.973Z",
                            "lastPasswordChangedDate": "2015-01-29T23:27:01.973Z",
                            "userFirstName": "asdf1",
                            "userLastName": "asdfsadfsa2",
                            "userZipCode": "asdfsadf6",
                            "fullNameUsernameZipcode": "",
                            "phoneNumber": "asdfsadfasdfsadfsadf10",
                            "addressLine1": "asfdasdfasdfasdf3",
                            "qrEmailAllow": true,
                            "optInSponsoredMailingsLevel": 1,
                            "city": "asdfasdfasdfasdfasdf4",
                            "state": "dsaf5",
                            "presentationLimit": 1,
                            "presentationApprovalRequired": true,
                            "company": "asdfasdfasdfasdfasdf8",
                            "principleJob": "adsfasd9",
                            "meetupShareInfo": true,
                            "allowAttendeeToEmailMe": true,
                            "workStudyInterest": false,
                            "donationOnHonorRoll": true,
                            "country": "dsafasdfsadfa7",
                            "id": 30464
                        }
                    };
                    return [200, accountInfo, {}];
                });

                var sponsorUrl = "/rest/sponsor/arrayonly/";
                $httpBackend.whenGET(sponsorUrl).respond(function (method, url, data) {
                    var sponsors = sponsorDataModelService.getData();
                    return [200, sponsors, {}];
                });

                var faqUrl = "/rest/faq/arrayonly/";
                $httpBackend.whenGET(faqUrl).respond(function (method, url, data) {
                    var faqs = faqDataModelService.getData();
                    return [200, faqs, {}];
                });

                var speakerUrlsOnly = '/rest/presenterurls';
                $httpBackend.whenGET(speakerUrlsOnly).respond(function (method, url, data) {
                    var speakerurlsdata = [];

                    return [200, speakerurlsdata, {}];
                });

                var sessionUrlsOnly = '/rest/sessionurls';
                $httpBackend.whenGET(sessionUrlsOnly).respond(function (method, url, data) {
                    var sessionurlsdata = [];

                    return [200, sessionurlsdata, {}];
                });

                var speakerUrl = "/rest/presenter/arrayonly/";
                $httpBackend.whenGET(speakerUrl).respond(function (method, url, data) {
                    var speakers = speakerDataModelService.getData();
                    return [200, speakers, {}];
                });


                var editingRegex = new RegExp(speakerUrl + "[0-9][0-9]/*", '');
                $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                    // grab peter kellner record. could mock all sessions forever but this
                    // data can also be gotten when not going directly to the speaker but by
                    // going to the all speakers page first, then go to the speaker
                    // through the url on that page.
                    var speakers = speakerDataModelService.getData();
                    var i = 0;
                    for (i = 0; i < speakers.length; i++) {
                        if (speakers[i].lastName === 'Kellner') {
                            speakers[i].webSite = 'http:/AlwaysPeterKellner.TestData';
                            break;
                        }
                    }
                    return [200, speakers[i], {}];
                });


                var sessionUrl = "/rest/session/arrayonly/";
                $httpBackend.whenGET(sessionUrl).respond(function (method, url, data) {
                    var sessions = sessionDataModelService.getData();
                    return [200, sessions, {}];
                });

                var editingRegexSession = new RegExp("/rest/session/[0-9][0-9]/*", '');
                $httpBackend.whenGET(editingRegexSession).respond(function (method, url, data) {
                    // grab peter kellner record. could mock all sessions forever but this
                    // data can also be gotten when not going directly to the speaker but by
                    // going to the all speakers page first, then go to the speaker
                    // through the url on that page.
                    var sessions = sessionDataModelService.getData();
                    //var i = 0;
                    //for (i = 0; i < sessions.length; i++) {
                    //    if (sessions[i].id === 1488) {
                    //
                    //        break;
                    //    }
                    //}
                    var session = {};
                    session.data = [sessions[0]];
                    return [200, session, {}];
                });


            };

            if (CONFIG.mockData === true) {
                initUrlMocksAll();
            }

        }]);


}());
