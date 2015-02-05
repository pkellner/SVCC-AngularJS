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

  describe('interpolateUrl', function () {

    it('interpolates using the config', angular.mock.inject(function (interpolateUrl) {
      expect(interpolateUrl('/foo/{{codeCampType}}/bar/{{codeCampType}}')).to.equal('/foo/angu/bar/angu');
    }));

  });

};
