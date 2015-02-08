'use strict';

require('angular-mocks');

var baseModule = require('angular').module('baseApp');

baseModule.requires.push('ngMockE2E')
baseModule.run(provideMocks);


function provideMocks ($httpBackend) {
  $httpBackend.whenGET(function (url) {
    return !/^\/rest\//.test(url);
  })
  .passThrough();
  $httpBackend.whenGET('/rest/faq/arrayonly/').respond(require('./data/faqs.json'));
}
provideMocks.$inject = ['$httpBackend'];
