'use strict';

import template from './sessions.html';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('sessions', {
    url: '/session',
    parent: 'base',
    resolve: {
      sessions: getSessions,
      days: getDays,
      tracks: getTracks,
      times: sessionTimes
    },
    views: {
      '@layout': {
        controller: 'SessionListController',
        controllerAs: 'list',
        template
      }
    }
  });
}
export default state;

getDays.$inject = ['Days'];
function getDays (Days) {
  return Days.fetchAll();
}

getTracks.$inject = ['Tracks'];
function getTracks (Tracks) {
  return Tracks.fetchAll();
}

getSessions.$inject = ['Sessions', 'tracks'];
function getSessions (Sessions, tracks) {
  return Sessions.fetchAll()
    .then((sessions) => {
      sessions.forEach((session) => {
        session.track = tracks.find(t => t.id === session.sessionTrackId);
      });
      return Sessions.sort().all();
    });
}

sessionTimes.$inject = ['SessionTimes', 'sessions'];
function sessionTimes (Times, sessions) {
  return Times.fetchAll()
    .then(function (times) {
      return sessions.map(function (session) {
        session.time = times.find(t => t.id === session.sessionTimesId);
        return session;
      });
    });
}
