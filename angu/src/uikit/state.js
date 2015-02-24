'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('uikit', {
    url: '/uikit',
    parent: 'base',
    views: {
      '@layout': {
        controller: 'UIKitController',
        controllerAs: 'details',
        templateUrl: 'app/uikit/uikit.html'
      }
    }
  });
}
export default state;

