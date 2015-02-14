'use strict';

require('es5-shim');

var angular = require('angular');
require('angular-mocks');

describe('Code Camp Base', function () {

  beforeEach(angular.mock.module(require('../')));

  describe('Mutli-Tenant Helpers', require('./multi'));
  describe('BaseModel', require('./model'));

  describe('Main', require('./main'));

});
