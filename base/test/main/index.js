'use strict';

var angular = require('angular');
var expect  = require('chai').expect;

module.exports = function () {

  describe('Controller', function () {

    var $controller;
    beforeEach(angular.mock.inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    it('exposes the faqs', function () {
      var faqs = [];
      expect($controller('MainController', {
        faqs: faqs,
        sponsors: []
      }))
      .to.have.property('faqs', faqs);
    });

    it('exposes the sponsors', function () {
      var sponsors = [];
      expect($controller('MainController', {
        faqs: [],
        sponsors: sponsors
      }))
      .to.have.property('sponsors', sponsors);
    });

  });

  describe('States', function () {

    it('resolves the faqs and sponsors', angular.mock.inject(function ($resolve, $httpBackend, $state) {
      $httpBackend
        .expectGET('/rest/faq/arrayonly/')
        .respond(200, [{}]);
      $httpBackend
        .expectGET('/rest/sponsor/arrayonly/')
        .respond(200, [{}]);
      $resolve.resolve($state.get('base').resolve).then(function (resolves) {
        expect(resolves.faqs).to.have.length(1);
        expect(resolves.sponsors).to.have.length(1);
      });
      $httpBackend.flush();
    }));

  });

};
