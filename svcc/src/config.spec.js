'use strict';

import angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';
import parseConfig from './config';

describe('Configuration parsing', function () {

  let CONFIG;
  beforeEach(function () {
    CONFIG = {};
  });
  beforeEach(angular.mock.module(function ($provide) {
    $provide.constant('CONFIG', CONFIG);
  }));
  beforeEach(angular.mock.module(parseConfig));
  
  describe('#cdnUrl', function () {

    it('is is a noop with an empty string', function (done) {
      CONFIG.cdnUrl = '';
      angular.mock.inject(function (config) {
        expect(config).to.have.deep.property('assets.cdn', '');
        done();
      });
    });

    it('prepends the hostname with "//"', function (done) {
      CONFIG.cdnUrl = 'cdn.cloudfront.com';
      angular.mock.inject(function (config) {
        expect(config).to.have.deep.property('assets.cdn', '//cdn.cloudfront.com');
        done();
      });
    });

  });


});
