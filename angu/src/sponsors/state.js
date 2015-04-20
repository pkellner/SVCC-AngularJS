'use strict';

import template from './sponsors.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('sponsors', {
    url: '/sponsors',
    parent: 'base',
    views: {
      '@layout': {
        template,
        controller: 'SponsorsController',
        controllerAs: 'sponsors'
      }
    }
  });
}
