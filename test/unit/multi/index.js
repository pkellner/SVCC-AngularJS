'use strict';

var angular = require('angular');
var expect  = require('chai').expect;

module.exports = function () {

  beforeEach(angular.mock.module(function ($provide) {
    $provide.constant('CONFIG', {
      baseDir: '',
      codeCampType: 'angu'
    });
  }));

  describe('campTemplateProvider#interpolateUrl', function () {

    it('creates an template provider that will interpolate and fetch a templateUrl', function () {
      var templateProvider;
      angular.mock.module(function (campTemplateProvider) {
        templateProvider = campTemplateProvider.provide('/foo/{{codeCampType}}')
      });
      angular.mock.inject(function ($injector, $httpBackend) {
        $httpBackend
          .expectGET('/foo/angu')
          .respond(200, 'theTemplate');
        $injector.invoke(templateProvider)
          .then(function (template) {
            expect(template).to.equal('theTemplate');
          });
        $httpBackend.flush();
      });
    });

  });

};
