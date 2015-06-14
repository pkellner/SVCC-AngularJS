'use strict';

var escape = require('escape-string-regexp');
require('angular-mocks');

var app = require('angular').module('angUApp');
var speakers = require('./data/speakers.json');

app.requires.push('ngMockE2E');
app.run(provideMocks);


function provideMocks($httpBackend) {
    $httpBackend.whenGET(function (url) {
        return !/^\/rest\//.test(url);
    })
        .passThrough();
    $httpBackend.whenGET('/rest/faq/arrayonly').respond(require('./data/faqs.json'));
    $httpBackend.whenGET('/rest/sponsor/arrayonly').respond(require('./data/sponsors.json'));
    $httpBackend.whenGET('/rest/presenterurls/arrayonly').respond(require('./data/speakerUrls.json'));


    var presenter = '/rest/presenter/arrayonly';
    $httpBackend.whenGET(presenter).respond(require('./data/speakers.json'));
    $httpBackend.whenGET(new RegExp(`${escape(presenter)}/.`)).respond(function (method, url) {
        var id = parseInt(url.split(`${presenter}/`)[1]);
        var speaker = speakers.find(speaker => speaker.id === id);
        return [200, [speaker]];
    });

    var sessions = require('./data/sessions.json');
    var sessionUrls = require('./data/sessionUrls.json');
    var sessionEndpoint = '/rest/session/arrayonly';
    var sessionSingleEndpoint = '/rest/sessionandws';
    $httpBackend.whenGET(sessionEndpoint).respond(sessions);
    $httpBackend.whenGET(new RegExp(`${escape(sessionSingleEndpoint)}/.`)).respond(function (method, url) {
        var id = parseInt(url.split(`${sessionSingleEndpoint}/`)[1].split('/')[1]);
        var session = sessions.find(session => session.id === id);
        return [200, session];
    });
    $httpBackend.whenGET('/rest/sessionurls/arrayonly').respond(sessionUrls);

    $httpBackend.whenGET('/rest/sessiontime/arrayonly').respond(require('./data/sessionTimes.json'));
    $httpBackend.whenGET('/rest/track/arrayonly').respond(require('./data/tracks.json'));
    $httpBackend.whenGET('/rest/sessiondayofweek/arrayonly').respond(require('./data/sessionDayOfWeek.json'));

    $httpBackend.whenGET('/rest/videosession/arrayonly').respond(require('./data/videosession.json'));

    $httpBackend.whenGET('/rest/codecampyear/arrayonly').respond(require('./data/codecampyear.json'));

}
provideMocks.$inject = ['$httpBackend'];
