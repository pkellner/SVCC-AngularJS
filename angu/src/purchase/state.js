'use strict';

import template from './ticket.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('purchase', {
    url: '/purchaseticket',
    parent: 'base',
    views: {
      '@layout': {
        template,
        controller: 'PurchaseController',
        controllerAs: 'purchase'
      }
    }
  });
}
