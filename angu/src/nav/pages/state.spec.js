'use strict';

import angular from 'angular';
import 'angular-mocks';
import {expect} from 'chai';
import nav from './';

describe('State Nav Item', function () {

  let $scope, element, $state;
  beforeEach(angular.mock.module(nav));
  beforeEach(angular.mock.module(function ($stateProvider) {
    $stateProvider.state('theState', {
      url: '/url'
    });
  }));
  beforeEach(angular.mock.inject(function ($compile, $rootScope, _$state_) {
    $scope = $rootScope.$new();
    element = $compile('<state-nav-item state="theState">The State</state-nav-item>')($scope);
    $state = _$state_;
  }));

  it('transitions to the state when clicked', function () {
    element.find('li').find('a').triggerHandler('click');
    $scope.$digest();
    expect($state.is('theState')).to.equal(true);
  });

  it('adds an active class when the state is active', function () {
    $state.go('theState');
    $scope.$digest();
    expect(element.find('li').hasClass('active')).to.equal(true);
  });

});
