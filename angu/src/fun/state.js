'use strict';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('fun', {
    url: '/fun',
    parent: 'base',
    views: {
      '@layout': {
        templateUrl: 'app/fun/fun.html'
      }
    }
  });
}
