'use strict';

exports = module.exports = function ($stateProvider) {
  $stateProvider.state('sessions', {
    url: '/session-details',
    parent: 'base',
    views: {
      '@layout': {
        controller: 'SessionDetailsController',
        controllerAs: 'session-details',
        templateUrl: 'app/sessions/session-detail.html'
      }
    }
  });
};
exports.$inject = ['$stateProvider'];
