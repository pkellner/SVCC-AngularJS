'use strict';

import template from './pluralsight.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('pluralsight', {
    url: '/pluralsight', // need to make this it's own directory
    parent: 'base',
    views: {
      '@layout': {
        template,
        controller: 'PluralsightController',
        controllerAs: 'sponsors'
      }
    }
  });
}
