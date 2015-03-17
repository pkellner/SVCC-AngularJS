'use strict';

import template from './fun.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('fun', {
    url: '/fun',
    parent: 'base',
    views: {
      '@layout': {
        template
      }
    }
  });
}
