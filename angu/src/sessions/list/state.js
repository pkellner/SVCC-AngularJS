'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('sessions', {
    url: '/sessions',
    parent: 'base',
    resolve: {
      sessions: getSessions,
      days: getDays
    },
    views: {
      '@layout': {
        controller: 'SessionListController',
        controllerAs: 'list',
        templateUrl: 'app/sessions/list/sessions.html'
      }
    }
  });
}
export default state;

getSessions.$inject = ['Sessions'];
function getSessions (Sessions) {
  return Sessions.fetchAll();
}

getDays.$inject = ['Days'];
function getDays (Days) {
  return Days.fetchAll();
}
