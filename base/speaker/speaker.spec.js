'use strict';

import angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';
import speakerModule from './';
import sessionModule from '../sessions';

describe('Speaker', function () {

  let Speaker;
  beforeEach(angular.mock.module(speakerModule));
  beforeEach(angular.mock.module(sessionModule));
  beforeEach(angular.mock.inject(function (_Speaker_) {
    Speaker = _Speaker_;
  }));

  describe('#parse', function () {

    it('casts the embedded sessions', angular.mock.inject(function (Sessions) {
      const speaker = new Speaker({
        sessions: [{}]
      });
      expect(speaker.sessions).to.have.length(1);
      expect(speaker.sessions[0]).to.be.an.instanceOf(Sessions);
    }));

  });

  describe('#$stateParams', function () {

    it('parses a speakerUrl into a state param object', function () {
      expect(new Speaker({
        presenterUrl: 'sf2015/ben-drucker'
      })
      .$stateParams())
      .to.deep.equal({
        camp: 'sf2015',
        speaker: 'ben-drucker'
      });
    });

    it('throws if the URL is incorrectly formatted', function () {
      expect(function () {
        new Speaker({
          presenterUrl: 'sf2015/ben-drucker/123'
        })
        .$stateParams();
      })
      .to.throw('Speaker urls must have 2 segments, got 3');
    });

  });

  describe('.name', function () {

    it('computes the full name', function () {
      expect(new Speaker({
        firstName: 'Ben',
        lastName: 'Drucker'
      }))
      .to.have.property('name', 'Ben Drucker');
    });

  });

  describe('Static methods', function () {

    describe('#formatUrl', function () {

      it('transforms state params into a speaker url', function () {
        expect(Speaker.formatUrl({
          camp: 'sf2015',
          speaker: 'ben-drucker'
        }))
        .to.equal('sf2015/ben-drucker');
      });

    });

    describe('#fetchByUrl', function () {

      it('fetches a speaker by url', function (done) {
        angular.mock.inject(function ($httpBackend) {
          $httpBackend.expectGET('/rest/presenterurls/arrayonly').respond(200, [{
            presenterId: 1,
            presenterUrl: 'sf2015/ben-drucker-1',
            urlPostToken: '2015sf'
          }]);
          $httpBackend.expectGET('/rest/presenter/arrayonly/1').respond(200, [{
            firstName: 'Ben',
            lastName: 'Drucker'
          }]);
          Speaker.fetchByUrl('sf2015/ben-drucker-1')
            .then(function (speaker) {
              expect(speaker.firstName).to.equal('Ben');
              expect(speaker).to.be.an.instanceOf(Speaker);
            })
            .finally(done);
          $httpBackend.flush();
        });
      });

    });

  });

});
