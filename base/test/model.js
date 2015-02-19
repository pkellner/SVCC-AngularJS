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

    function inverseSort (a, b) {
      a = a.v;
      b = b.v;
      if (a < b) {
        return 1;
      }
      else if (a > b) {
        return -1;
      }
      else {
        return 0;
      }
    }

    it('is a noop with no comparator', function () {
      Model.sort();
    });

    it('can sort by a static comparator', function () {
      Model.comparator = inverseSort;
      Model.set([{v: 1}, {v: 2}, {v: 3}]);
      Model.sort();
      expect(Model.all()).to.deep.equal([{v: 3}, {v: 2}, {v: 1}]);
    });

    it('can sort by a dynamic comparator', function () {
      Model.set([{v: 1}, {v: 2}, {v: 3}]);
      Model.sort(inverseSort);
      expect(Model.all()).to.deep.equal([{v: 3}, {v: 2}, {v: 1}]);
    });

  });

  describe('#extend', function () {

    it('calls through to the parent', function () {
      var Child = Model.extend();
      expect(new Child({
        foo: 'bar'
      }))
      .to.contain({
        foo: 'bar'
      });
    });

    it('copies parent ctor properties', function () {
      expect(Model.extend()).to.itself.respondTo('extend');
    });

    it('can add ctor properties', function () {
      expect(Model.extend({}, {
        newMethod: angular.noop
      }))
      .to.itself.respondTo('newMethod');
    });

    it('sets up a new internal data array', function () {
      expect(Model.all()).to.not.equal(Model.extend().all());
    });

    it('copies parent proto properties', function () {
      Model.prototype.method = angular.noop;
      expect(Model.extend()).to.respondTo('method');
    });

    it('can add new proto properties', function () {
      expect(Model.extend({
        method: angular.noop
      }))
      .to.respondTo('method');
    });

    it('sets the correct constructor', function () {
      var Child = Model.extend();
      expect(new Child().constructor).to.equal(Child);
    });

  });

  describe('#fetchOne', function () {

    it('gets a single model using a specified suffix', angular.mock.inject(function ($httpBackend) {
      $httpBackend
        .expectGET('/model/suffix/')
        .respond(200, {
          foo: 'bar'
        });
      Model.url = '/model';
      Model.fetchOne('/suffix')
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
        .expectGET('/model/arrayonly/')
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
