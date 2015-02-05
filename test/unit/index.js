'use strict';

var angular = require('angular');

describe('App', function () {

  beforeEach(angular.mock.module(require('../../')));

  describe('Template Helpers', require('./template'));

});
