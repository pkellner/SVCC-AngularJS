'use strict';

require('angular-mocks');

module.exports = require('angular')
  .module('mockData', [
    'baseApp',
    'ngMockE2E'
  ])
  .run(function ($httpBackend) {
    $httpBackend.whenGET('/rest/faq/arrayonly/').respond(require('./faqs'));
  });
