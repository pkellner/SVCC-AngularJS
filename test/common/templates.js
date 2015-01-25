'use strict';

describe('angular-u-app', function () {

  beforeEach(module(function ($provide) {
    $provide.constant('CONFIG', {
      baseDir: '',
      codeCampType: 'angu'
    });
  }));
  beforeEach(module('baseApp'));

  describe('getTemplate', function () {

    it('replaces tokens with the camp type for a template request', function () {
      inject(function ($httpBackend, getTemplate) {
        $httpBackend
          .expectGET('/foo/angu/bar/angu')
          .respond(200, 'theTemplate');
        getTemplate('/foo/{0}/bar/{0}')
          .then(function (template) {
            expect(template).to.equal('theTemplate');
          });
        $httpBackend.flush();
      });
    });

  });

});
