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

  describe('interpolateTemplateUrl', function () {

    it('replaces {0} tokens with the camp type', angular.mock.inject(function (interpolateTemplateUrl) {
      expect(interpolateTemplateUrl('/foo/{0}/bar/{0}')).to.equal('/foo/angu/bar/angu');
    }));

  });

};
