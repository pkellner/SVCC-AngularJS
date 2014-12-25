(function () {
    'use strict';


    var app = angular.module('baseApp', [
        'ngMessages',
        'ngResource',
        'ui.router',
        'pusher-angular',
        'svccApp',
        'ngMockE2E'
        //'speakerResourceServiceMock',
        //'accountInfoServiceMock'

    ]);

    app.config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider, $rootScope) {
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
                    templateUrl: 'app/svcc/miscpages/home.html'
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

                state('svcc.speakerid', {
                    //parent: 'svcc.speakers',
                    url: '/speaker/:id',
                    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                            return speakerResourceService.get({id: $stateParams.id}).$promise;
                        }]
                    }
                }).

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


    app.run(function($httpBackend) {


        var speakerUrl = "/rest/presenter/arrayonly";
        $httpBackend.whenGET(speakerUrl).respond(function (method, url, data) {
            var speakers = [
                {
                    "id": 5443,
                    "firstName": "Mark",
                    "lastName": "Abramson",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                    "webSite": "twitter.com/mark__a",
                    "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "PrintForm Corporation",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1435,
                            "title": "Intro to Relational Database Design & Entity-Relationship Diagrams",
                            "description": "Mark will cover the basics of designing and setting up a database schema. He'll define some common business scenarios, build out some tables, create relationships, and then demo usage, pitfalls, problems and design tradeoffs. With so many database-driven projects for consumer desktop software applications, websites and enterprise software systems, the database design plays a crucial role in the success of your project. You'll see real-life examples and issues such as: Creating a new table; Choosing data types; Normalization (and when to denormalize); Types of relationships; Referential integrity; Join/relationship tables; 1-to-many, many-to-many; How to actually use these structures in your application; While the examples will focus on SQL Server, the techniques and SQL code will work for virtually any SQL database. There will be discussion of various commercial and open source tools to streamline your work. ",
                            "room": "8402",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "5:00 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 9,
                                    "tagName": "Database",
                                    "sessions": []
                                },
                                {
                                    "id": 333,
                                    "tagName": "Data Services",
                                    "sessions": []
                                },
                                {
                                    "id": 599,
                                    "tagName": "SQL",
                                    "sessions": []
                                },
                                {
                                    "id": 905,
                                    "tagName": "SQL Server 2012",
                                    "sessions": []
                                },
                                {
                                    "id": 24,
                                    "tagName": "SQL Server",
                                    "sessions": []
                                },
                                {
                                    "id": 374,
                                    "tagName": "SQL Azure",
                                    "sessions": []
                                },
                                {
                                    "id": 909,
                                    "tagName": "SSIS",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Database,Data Services,SQL,SQL Server 2012,SQL Server,SQL Azure,SSIS",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T17:00:00"
                        },
                        {
                            "id": 1436,
                            "title": "Advanced Data Modeling with ER Diagrams",
                            "description": "In this session we will dive in deeper and work on specific challenges that crop up with database designs. This session will be interactive and will benefit from your specific database-related issues. Please hit me on Twitter (@mark__a) or use the \"email the speaker\" button with your challenges and we'll do our best to cover some approaches for you in the class. Need the basics? Check out my other session on \"Intro to DB Design.\"",
                            "room": "Not Assigned",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "Agenda Not Set Yet",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 9,
                                    "tagName": "Database",
                                    "sessions": []
                                },
                                {
                                    "id": 599,
                                    "tagName": "SQL",
                                    "sessions": []
                                },
                                {
                                    "id": 374,
                                    "tagName": "SQL Azure",
                                    "sessions": []
                                },
                                {
                                    "id": 24,
                                    "tagName": "SQL Server",
                                    "sessions": []
                                },
                                {
                                    "id": 905,
                                    "tagName": "SQL Server 2012",
                                    "sessions": []
                                },
                                {
                                    "id": 909,
                                    "tagName": "SSIS",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Database,SQL,SQL Azure,SQL Server,SQL Server 2012,SSIS",
                            "sessionLevelId": 3,
                            "sessionTimeDateTime": "2007-10-26T00:00:00"
                        },
                        {
                            "id": 2577,
                            "title": "Lean Startup for Engineers",
                            "description": "\nGet Idea! Build a Product! Sell it!\n\nWe've all spent too many hours and too much damn money with this approach only to fail in the end.\n\nMark will teach you had to turn this \"Conventional Engineer's Wisdom\" on its head and build products that people will buy on day one. Many times, we engineers build features without ever talking to the customers and users who they benefit.\n\nWe'll start with the absolute basics: how to define your customer and discover what their true problem is. \"But I don't have any customers or users!\" you will say. You will learn how and where to find them and then how to engage them in meaningful conversation about their problems. Our goal? Build the right solution for the right customer and make them ultimately beg you for your solution.\n\nTeaching with examples, Mark will share his specific experiences finding customers and how to talk to them. We'll run through several tools, tips and tricks Mark used to find success (after years of failing).\n\nThis is a unique opportunity to learn nuggets of Lean Startup wisdom from one of the Bay Area's most enthusiastic trainers and mentors.",
                            "room": "8402",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "3:30 PM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 5443,
                                    "firstName": "Mark",
                                    "lastName": "Abramson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Mark Abramson is Founder & CEO of PrintForm Corporation; co-founder of Medicine of Cycling and on the Board of USA Cycling. He is veteran of both early-stage startups and enterprise software projects, he has particular technical expertise in digital workflow, industrial printing and complex global supply chains for high-growth companies.  He's also a dad, runs the Microsoft SF.NET & BizSparkSF groups for Bay Area startups, collects antique woodworking machines and mentors on Lean Startup methods.",
                                    "webSite": "twitter.com/mark__a",
                                    "imageUrl": "/attendeeimage/20130102000000-5443.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "PrintForm Corporation",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                                    "twitterUrl": "http://twitter.com/mark__a"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 143,
                                    "tagName": "Agile",
                                    "sessions": []
                                },
                                {
                                    "id": 758,
                                    "tagName": "Angel Investment",
                                    "sessions": []
                                },
                                {
                                    "id": 849,
                                    "tagName": "Business",
                                    "sessions": []
                                },
                                {
                                    "id": 418,
                                    "tagName": "lean",
                                    "sessions": []
                                },
                                {
                                    "id": 371,
                                    "tagName": "Lean Startup",
                                    "sessions": []
                                },
                                {
                                    "id": 838,
                                    "tagName": "Marketing",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Agile,Angel Investment,Business,lean,Lean Startup,Marketing",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T15:30:00"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "http://www.linkedin.com/in/abramsonmark",
                    "twitterUrl": "http://twitter.com/mark__a"
                },
                {
                    "id": 3073,
                    "firstName": "Rahul",
                    "lastName": "Agarwal",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Developer with experience in Java, OSGi, Spring, Hibernate, highly scalable and highly transactional systems, RESTful APIs, E-Commerce and Micro-transaction systems. Part-time instructor at UCSC Silicon Valley and Foothill College. Expertise in backend systems but I have also played with Android and Glass. ",
                    "webSite": "irahul.com",
                    "imageUrl": "/attendeeimage/20140415035045-3073.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 1424,
                            "title": "Creating REST services with JAX-RS",
                            "description": "<p>If you are creating REST APIs in Java then JAX-RS is the standard. We will briefly talk about the HTTP protocol and what REST is and then create some APIs. We will use Spring/Maven to put it together and deploy in Tomcat. This is a small part of a class I teach at UCSC Silicon Valley.</p>\n\n<p>Some code we will review is at <a href=\"https://github.com/rahulaga/code-camp\">https://github.com/rahulaga/code-camp</a></p>",
                            "room": "4221",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "11:15 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 3073,
                                    "firstName": "Rahul",
                                    "lastName": "Agarwal",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Developer with experience in Java, OSGi, Spring, Hibernate, highly scalable and highly transactional systems, RESTful APIs, E-Commerce and Micro-transaction systems. Part-time instructor at UCSC Silicon Valley and Foothill College. Expertise in backend systems but I have also played with Android and Glass. ",
                                    "webSite": "irahul.com",
                                    "imageUrl": "/attendeeimage/20140415035045-3073.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                                    "twitterUrl": "http://twitter.com/whatsrahulhatin"
                                }
                            ],
                            "tags": [
                                {
                                    "id": 837,
                                    "tagName": "Java",
                                    "sessions": []
                                },
                                {
                                    "id": 927,
                                    "tagName": "JAX-RS",
                                    "sessions": []
                                },
                                {
                                    "id": 253,
                                    "tagName": "Spring",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Java,JAX-RS,Spring",
                            "sessionLevelId": 2,
                            "sessionTimeDateTime": "2014-10-11T11:15:00"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "http://www.linkedin.com/in/rahulaga",
                    "twitterUrl": "http://twitter.com/whatsrahulhatin"
                },
                {
                    "id": 21283,
                    "firstName": "Jeff",
                    "lastName": "Anderson",
                    "email": "",
                    "phoneNumber": "",
                    "bio": "Jeff Anderson is an Assistant Professor of Mathematics at Foothill College. He earned his PhD in Numerical Linear Algebra from UC Davis studying algorithms to decrease the dimensions of large-scale computational problems without sacrificing accuracy. Jeff works primarily with MATLAB to implement his mathematical algorithms. ",
                    "webSite": "http://www.foothill.edu/psme/directory.php?s=1&rec_id=1910",
                    "imageUrl": "/attendeeimage/20140910182201-21283.jpg",
                    "allowAttendeeToEmailMe": true,
                    "company": "Foothill College",
                    "presentationLimit": 0,
                    "sessions": [
                        {
                            "id": 3655,
                            "title": "Introduction to Google's PageRank Algorithm",
                            "description": "Each time we use Google, we ask Google's search engine to produce a list of websites closely matching information relevant to our search. This talk is an introduction to Google's search methods with a focus on the mathematical background of the PageRank algorithm. It is recommended that audience members have finished courses in Calculus, Linear Algebra and Numerical Analysis.",
                            "room": "5501",
                            "logDate": "0001-01-01T00:00:00",
                            "startTime": "11:15 AM Saturday",
                            "startTimeDateTime": "0001-01-01T00:00:00",
                            "interestedCount": 0,
                            "planToAttendCount": 0,
                            "interested": false,
                            "willAttend": false,
                            "presenters": [
                                {
                                    "id": 21283,
                                    "firstName": "Jeff",
                                    "lastName": "Anderson",
                                    "email": "",
                                    "phoneNumber": "",
                                    "bio": "Jeff Anderson is an Assistant Professor of Mathematics at Foothill College. He earned his PhD in Numerical Linear Algebra from UC Davis studying algorithms to decrease the dimensions of large-scale computational problems without sacrificing accuracy. Jeff works primarily with MATLAB to implement his mathematical algorithms. ",
                                    "webSite": "http://www.foothill.edu/psme/directory.php?s=1&rec_id=1910",
                                    "imageUrl": "/attendeeimage/20140910182201-21283.jpg",
                                    "allowAttendeeToEmailMe": true,
                                    "company": "Foothill College",
                                    "presentationLimit": 0,
                                    "sessions": [],
                                    "allowHtml": false,
                                    "facebookUrl": "",
                                    "googlePlusUrl": "",
                                    "linkedInUrl": "",
                                    "twitterUrl": ""
                                }
                            ],
                            "tags": [
                                {
                                    "id": 339,
                                    "tagName": "Google",
                                    "sessions": []
                                },
                                {
                                    "id": 835,
                                    "tagName": "HTML",
                                    "sessions": []
                                },
                                {
                                    "id": 480,
                                    "tagName": "math",
                                    "sessions": []
                                },
                                {
                                    "id": 363,
                                    "tagName": "SEO",
                                    "sessions": []
                                },
                                {
                                    "id": 852,
                                    "tagName": "Web",
                                    "sessions": []
                                }
                            ],
                            "allowHtml": false,
                            "kidOrProfessionalSession": "ProfessionalSession",
                            "kidSession": false,
                            "tagsResultCsv": "Google,HTML,math,SEO,Web",
                            "sessionLevelId": 1,
                            "sessionTimeDateTime": "2014-10-11T11:15:00"
                        }
                    ],
                    "allowHtml": false,
                    "facebookUrl": "",
                    "googlePlusUrl": "",
                    "linkedInUrl": "",
                    "twitterUrl": ""
                }];
            return [200, speakers, {}];
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



}());