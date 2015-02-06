'use strict';

var angular = require('angular');
require('angular-mocks');

describe('App', function () {

  beforeEach(angular.mock.module(require('../../')));

  describe('Template Helpers', require('./template'));
  describe('BaseModel', require('./model'));

});
