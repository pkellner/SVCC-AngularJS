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

  $stateProvider.state('sessions-program', {
    url: '/sessions',
    parent: 'base',
    views: {
      '@layout': {
        controller: 'SessionsController',
        controllerAs: 'sessions',
        templateUrl: 'app/sessions/sessions.html'
      }
    }
  });
};
exports.$inject = ['$stateProvider'];
