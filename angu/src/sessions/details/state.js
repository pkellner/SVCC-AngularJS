'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('session', {
    url: '/sessions/:camp/:session',
    parent: 'base',
    resolve: {
      sessionUrl: sessionUrl,
      session: getSpeaker
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


getSpeaker.$inject = ['Sessions', 'sessionUrl'];
function getSpeaker (Sessions, sessionUrl) {
  return Sessions.fetchByUrl(sessionUrl);
}
