'use strict';

var angular = require('angular');
var expect  = require('chai').expect;

module.exports = function () {

  var Model, model, $httpBackend;
  beforeEach(angular.mock.inject(function (_Model_, _$httpBackend_) {
    Model        = _Model_;
    model        = new Model();
    $httpBackend = _$httpBackend_;
  }));

  describe('Constructor', function () {

    it('extends the instance with attributes', function () {
      expect(new Model({
        foo: 'bar'
      }))
      .to.contain({
        foo: 'bar'
      });
    });

  });

  describe('#all', function () {

    it('returns the data', function () {
      expect(Model.all()).to.equal(Model.$$data);
    });

  });

  describe('#forge', function () {

    it('casts data into a Model instance', function () {
      expect(Model.forge({
        foo: 'bar'
      }))
      .to.contain({
        foo: 'bar'
      })
      .and.to.be.an.instanceOf(Model);
    });

  });

  describe('#set', function () {

    it('maps an array of data to Models and sets as $$data', function () {
      Model.set([{
        foo: 'bar'
      }]);
      expect(Model.at(0))
        .to.contain({
          foo: 'bar'
        })
        .and.be.an.instanceOf(Model);
    });

    it('returns itself', function () {
      expect(Model.set([])).to.equal(Model);
    });

  });

  describe('#at', function () {

    it('gets the model at the specified index', function () {
      Model.set([{
        foo: 'bar'
      }]);
      expect(Model.at(0)).to.contain({
        foo: 'bar'
      });
    });

  });

  describe('#find', function () {

    it('finds the first model where the callback returns truthy', function () {
      Model.set([{val: 0}, {val: 1}, {val: 2}]);
      expect(Model.find(function (model) {
        return model.val === 1;
      }))
      .to.equal(Model.at(1));
    });

    it('returns undefined if there is no match', function () {
      Model.set([{val: 0}]);
      expect(Model.find(function (model) {
        return model.val === 1;
      }))
      .to.equal(undefined);
    });

  });

  describe('#sort', function () {

    it('is a noop with no comparator', function () {
      Model.sort();
    });

    it('can sort by a property', function () {
      Model.comparator = 'v';
      Model.set([{v: 'c'}, {v: 'b'}, {v: 'a'}]);
      expect(Model.all()).to.deep.equal([{v: 'a'}, {v: 'b'}, {v: 'c'}]);
    });

    it('can sort by a value returned by a function', function () {
      Model.comparator = function (el) {
        return el.v
      };
      Model.set([{v: 3}, {v: 2}, {v: 1}]);
      expect(Model.all()).to.deep.equal([{v: 1}, {v: 2}, {v: 3}]);
    });

    it('can receive a comparator', function () {
      Model.set([{v: 3}, {v: 2}, {v: 1}]);
      expect(Model.all()).to.deep.equal([{v: 3}, {v: 2}, {v: 1}]);
      Model.sort('v');
      expect(Model.all()).to.deep.equal([{v: 1}, {v: 2}, {v: 3}]);
    });

  });

  describe('#init', function () {

    it('creates an empty data cache', function () {
      Model.init();
      expect(Model.all()).to.have.length(0);
    });

  });

  describe('#fetchOne', function () {

    it('gets a single model using a specified suffix', angular.mock.inject(function ($httpBackend) {
      $httpBackend
        .expectGET('/model/arrayonly/suffix')
        .respond(200, {
          foo: 'bar'
        });
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

};
