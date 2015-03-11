'use strict';

import {expect} from 'chai';
import Model from './model';

describe('Model Base', function () {

  describe('Constructor', function () {

    it('extends the instance with attributes', function () {
      expect(new Model({
        foo: 'bar'
      }))
      .to.contain({
        foo: 'bar'
      });
    });

    it('copies data', function () {
      const obj = {};
      const model = new Model({
        foo: obj
      });
      expect(model.foo).to.not.equal(obj);
    });

    it('calls a parse function with the attributes', function () {
      class Child extends Model {
        parse (attributes) {
          attributes.foo = 'bar';
          return attributes;
        }
      }
      expect(new Child()).to.contain({
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
      expect(Model.all()[0])
        .to.contain({
          foo: 'bar'
        })
        .and.be.an.instanceOf(Model);
    });

    it('returns itself', function () {
      expect(Model.set([])).to.equal(Model);
    });

  });

  describe('Array methods', function () {

    it('proxies to the data cache array', function () {
      Model.set([{v: 1}, {v: 2}, {v: 3}]);
      expect(Model.filter(model => model.v % 2 === 0))
        .to.have.length(1);
    });

  });

  describe('#sort', function () {

    beforeEach(function () {
      Model.comparator = undefined;
      Model.$$data = [];
    });

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
        return el.v;
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

  describe('#reset', function () {

    it('empties the data cache', function () {
      Model.set([{}]);
      expect(Model.all()).to.have.length(1);
      Model.reset();
      expect(Model.all()).to.have.length(0);
    });

  });

});
