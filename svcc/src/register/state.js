'use strict';

import template from './index.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('purchase', {
    url: '/register',
    parent: 'base',
    views: {
      '@layout': {
        template,
        controller: 'RegisterController',
        controllerAs: 'register'
      }
    }
  });
}
