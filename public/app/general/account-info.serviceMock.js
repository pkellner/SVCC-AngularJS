//(function () {
//    "use strict";
//
//    //debugger;
//
//    var app = angular
//        .module("accountInfoServiceMock",
//        ["ngMockE2E"]);
//
//    app.run(function ($httpBackend) {
//
//        //debugger;
//
//        var accountInfo = {
//            "returnStatus": "OK",
//            "codeCampType": "svcc",
//            "registrationWords": "To attend Angular University you <b>must be registered and have a confirmed ticket</b>.",
//            "registrationClosed": false,
//            "isAdmin": false,
//            "eventName": "Angular University San Francisco 2014",
//            "success": true,
//            "okToSubmitSessions": false,
//            "presentationLimit": 0,
//            "sessionsSubmittedTotal": 0,
//            "currentCodeCampYear": "2015sf",
//            "codeCampYearId": 201,
//            "showAgendaOnSchedule": true,
//            "showTrackOnSession": true,
//            "showRoomOnSchedule": true,
//            "showSessionInterest": false,
//            "scheduleAllowCheckAttend": true,
//            "showSessionInterestCount": false,
//            "showSessionPlanAheadCount": false,
//            "submitSessionsOpen": false,
//            "cloudFrontCacheServer": "x",
//            "attendeesImageUrl": "/attendeeimage/20140411190526-11420.jpg",
//            "attendeeResults": {
//                "interestLevel": 0,
//                "donationAmount": 0.0,
//                "kidDonationOverride": false,
//                "registeredCurrentYear": false,
//                "hasSessionsCurrentYear": false,
//                "volunteeredCurrentYear": false,
//                "attendeesId": 11420,
//                "saturdayClasses": false,
//                "hasLedgerEntriesCurrentCodeCampYear": false,
//                "allowPartialSessionEdit": false,
//                "allowFullSessionEdit": false,
//                "pkid": "00000000-0000-0000-0000-000000000000",
//                "username": "test77",
//                "applicationName": "",
//                "email": "joe@gmail.com",
//                "comment": "",
//                "password": "",
//                "passwordQuestion": "",
//                "passwordAnswer": "",
//                "isApproved": true,
//                "lastActivityDate": "2014-12-22T17:32:36Z",
//                "lastLoginDate": "2014-12-22T17:32:36.11Z",
//                "creationDate": "2013-09-03T22:00:20.107Z",
//                "isLockedOut": false,
//                "lastLockedOutDate": "2013-09-03T22:00:20.107Z",
//                "failedPasswordAttemptCount": 1,
//                "failedPasswordAttemptWindowStart": "2014-09-22T16:56:50.05Z",
//                "failedPasswordAnswerAttemptCount": 0,
//                "failedPasswordAnswerAttemptWindowStart": "2013-09-03T22:00:20.107Z",
//                "lastPasswordChangedDate": "2013-09-03T22:00:20.107Z",
//                "userWebsite": "http://biohazard.com",
//                "userFirstName": "Joe",
//                "userLastName": "Plumber",
//                "userZipCode": "asdfsadfsdf",
//                "userBio": "This is a bio for Joe The Plumber. Here it is again.  Go for it!  Now is the time for all good men to come to the aid of their country.  Why do I still see red?",
//                "fullNameUsernameZipcode": "",
//                "phoneNumber": "4082341384",
//                "allowEmailToSpeakerPlanToAttend": false,
//                "allowEmailToSpeakerInterested": false,
//                "qrEmailAllow": true,
//                "shirtSize": "Mens-S",
//                "twitterHandle": "@joetheplumber",
//                "optInSponsoredMailingsLevel": 1,
//                "optInSponsorSpecialsLevel": 1,
//                "city": "asdfsdfsdfs",
//                "state": "asdfsadf",
//                "presentationLimit": 0,
//                "presentationApprovalRequired": true,
//                "company": "My Big Company",
//                "principleJob": "xxx",
//                "optInSvccKids": "1",
//                "lastUpdateDate": "2014-04-11T19:05:26.093Z",
//                "sessionGuid": "5a181f04-2a0b-4a01-a186-cbdeb17a7cff",
//                "sessionGuidExpiration": "2015-01-06T01:32:36.1933338Z",
//                "meetupShareInfo": true,
//                "allowAttendeeToEmailMe": false,
//                "userBioShort": "This is a bio for Joe The Plumber. Here it is again.",
//                "workStudyInterest": false,
//                "donationOnHonorRoll": false,
//                "isKid": false,
//                "kidBirthYear": 0,
//                "notificationLevel": "interestedandplantoattend",
//                "notificationDestinationText": true,
//                "notificationDestinationEmail": true,
//                "id": 11420
//            }
//        };
//
//        var accountInfoUrl = "/rpc/Account/IsLoggedIn";
//        $httpBackend.whenGET(accountInfoUrl).respond(accountInfo);
//
//        // Pass through any requests for application files
//        //$httpBackend.whenGET(/app/).passThrough();
//
//
//    })
//}());
