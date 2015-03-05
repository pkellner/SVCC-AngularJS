'use strict';

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  ['session', 'workshop'].forEach(function (type) {
    $stateProvider.state(type, {
      url: `/${type}s/:camp/:session`,
      parent: 'base',
      resolve: {
        sessionType: function () {
          return type;
        },
        sessionUrl: sessionUrl,
        session: getSession
      },
      views: {
        '@layout': {
          controller: 'SessionDetailsController',
          controllerAs: 'details',
          templateUrl: 'app/sessions/details/details.html'
        }
      }
    });
  });
}
export default states;

sessionUrl.$inject = ['Sessions', '$stateParams'];
function sessionUrl (Sessions, $stateParams) {
  return Sessions.formatUrl($stateParams);
}


getSession.$inject = ['Sessions', 'sessionUrl', '$q', 'Tracks', 'SessionTimes'];
function getSession (Sessions, sessionUrl, $q, Tracks, SessionTimes) {
  return $q.all([
    Sessions.fetchByUrl(sessionUrl),
    Tracks.fetchAll(),
    SessionTimes.fetchAll()
  ])
  .then(function (results) {
    const session = results[0];
    const tracks = results[1];
    const times = results[2];
    session.track = tracks.find(t => t.id === session.sessionTrackId);
    session.time = times.find(t => t.id === session.sessionTimesId);
    return session;
  });
}
