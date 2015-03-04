'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('session', {
    url: '/sessions/:camp/:session',
    parent: 'base',
    resolve: {
      sessionUrl: sessionUrl,
      session: getSession,
      times: getTimes
    },
    views: {
      '@layout': {
        controller: 'SessionDetailsController',
        controllerAs: 'details',
        templateUrl: 'app/sessions/details/details.html'
      }
    }
  });
}
export default state;

sessionUrl.$inject = ['Sessions', '$stateParams'];
function sessionUrl (Sessions, $stateParams) {
  return Sessions.formatUrl($stateParams);
}


getSession.$inject = ['Sessions', 'sessionUrl'];
function getSession (Sessions, sessionUrl) {
  return Sessions.fetchByUrl(sessionUrl);
}

getTimes.$inject = ['SessionTimes', 'sessionUrl'];
function getTimes (SessionTimes, sessionUrl) {
  return SessionTimes.fetchAll();
}
