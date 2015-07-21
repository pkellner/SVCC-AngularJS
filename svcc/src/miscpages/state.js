'use strict';

import template from './fun.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('miscpages', {
    url: '/miscpages',
    parent: 'base',
    views: {
      '@layout': {
        template
      }
    }
  });
}
