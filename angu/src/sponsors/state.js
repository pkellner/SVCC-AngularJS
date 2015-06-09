'use strict';

import template from './sponsors.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('sponsors', {
    url: '/pluralsight', // need to make this it's own directory
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
