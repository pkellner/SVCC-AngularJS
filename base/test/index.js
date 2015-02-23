'use strict';

import 'es5-shim';

import angular from 'angular'
import 'angular-mocks';
import codeCampBase from '../';
import multiTenant from './multi';
import baseModel from './model';

describe('Code Camp Base', function () {

  beforeEach(angular.mock.module(codeCampBase));

  describe('Mutli-Tenant Helpers', multiTenant);
  describe('BaseModel', baseModel);

});
