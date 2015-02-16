'use strict';

require('angular-mocks');

var app = require('angular').module('angUApp');

app.requires.push('ngMockE2E')
app.run(provideMocks);


function provideMocks ($httpBackend) {
  $httpBackend.whenGET(function (url) {
    return !/^\/rest\//.test(url);
  })
  .passThrough();
  $httpBackend.whenGET('/rest/faq/arrayonly/').respond(require('./data/faqs.json'));
  $httpBackend.whenGET('/rest/sponsor/arrayonly/').respond(require('./data/sponsors.json'));
  $httpBackend.whenGET('/rest/presenter/arrayonly/').respond(require('./data/speakers.json'));
}
provideMocks.$inject = ['$httpBackend'];
