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

  describe('Class', function () {

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

  });

};
