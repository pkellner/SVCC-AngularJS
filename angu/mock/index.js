'use strict';

var escape = require('escape-string-regexp');
require('angular-mocks');

var app = require('angular').module('angUApp');
var speakers = require('./data/speakers.json');

app.requires.push('ngMockE2E');
app.run(provideMocks);


function provideMocks ($httpBackend) {
  $httpBackend.whenGET(function (url) {
    return !/^\/rest\//.test(url);
  })
  .passThrough();
  $httpBackend.whenGET('/rest/faq/arrayonly').respond(require('./data/faqs.json'));
  $httpBackend.whenGET('/rest/sponsor/arrayonly').respond(require('./data/sponsors.json'));

  var presenter = '/rest/presenter/arrayonly';
  $httpBackend.whenGET(presenter).respond(require('./data/speakers.json'));
  $httpBackend.whenGET(new RegExp(`${escape(presenter)}/.`)).respond(function (method, url) {
    var presenterUrl = url.split(`${presenter}/`)[1];
    var speaker = speakers.find(speaker => speaker.presenterUrl === presenterUrl);
    return [200, speaker];
  });

  var sessions = require('./data/sessions.json');
  var sessionUrls = require('./data/sessionUrls.json');
  var sessionEndpoint = '/rest/session/arrayonly';
  $httpBackend.whenGET(new RegExp(`${escape(sessionEndpoint)}/.`)).respond(function (method, url) {
    var id = parseInt(url.split(`${sessionEndpoint}/`)[1]);
    var session = sessions.find(session => session.id === id);
    return [200, session];
  });
  $httpBackend.whenGET('/rest/sessionurls/arrayonly').respond(sessionUrls);

  $httpBackend.whenGET('/rest/sessiontimes/arrayonly').respond(require('./data/sessionTimes.json'));

}
provideMocks.$inject = ['$httpBackend'];
