'use strict';

import angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';
import modelModule from './';

describe('Model REST', function () {

  beforeEach(angular.mock.module(modelModule));

  let Model, model, $httpBackend;
  beforeEach(angular.mock.inject(function (_Model_, _$httpBackend_) {
    Model        = _Model_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#fetchOne', function () {

    it('gets a single model using a specified suffix', angular.mock.inject(function ($httpBackend) {
      $httpBackend
        .expectGET('/model/arrayonly/suffix')
        .respond(200, [{
          foo: 'bar'
        }]);
      Model.url = '/model';
      Model.fetchOne('suffix')
        .then(function (model) {
          expect(model)
            .to.contain({
              foo: 'bar'
            })
            .and.be.an.instanceOf(Model);
        });
      $httpBackend.flush();
    }));

  });

  describe('#fetchAll', function () {

    it('fetches and saves all models', angular.mock.inject(function () {
      $httpBackend
        .expectGET('/model/arrayonly')
        .respond(200, [{
          foo: 'bar'
        }]);
      Model.url = '/model';
      Model.fetchAll().then(function (models) {
        expect(models).to.have.length(1);
      });
      $httpBackend.flush();
    }));

  });

});
