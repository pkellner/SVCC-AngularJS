'use strict';

import sort from 'sort-on';
import template from './overview.html';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('overview', {
    url: '/overview',
    parent: 'base',
    resolve: {
      sessions: getSessions,
      days: getDays,
      tracks: getTracks,
      times: sessionTimes
    },
    views: {
      '@layout': {
        controller: 'SessionOverviewController',
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

getSessions.$inject = ['Sessions', 'tracks', 'times'];
function getSessions (Sessions, tracks, times) {
  return Sessions.fetchAll()
    .then((sessions) => {
      const groups = sessions = sessions
        .map((session) => {
          session.track = tracks.find(t => t.id === session.sessionTrackId);
          session.time = times.find(t => t.id === session.sessionTimesId);
          return session;
        })
        .reduce((times, session, index, sessions) => {
          const timeId = session.time ? session.time.id : '';
          times[timeId] = times[timeId] || [];
          times[timeId].push(session);
          if (index < sessions.length - 1) {
            return times;
          }
          else {
            return Object.keys(times).map(key => times[key]);
          }
        }, {})
        .map((grouped) => {
          return sort(grouped, 'track.sequence');
        });
      return sort(groups, (group) => {
        return Sessions.comparator(group[0]);
      })
      .reduce((sessions, group) => {
        sessions.push.apply(sessions, group);
        return sessions;
      }, []);
    });
}

sessionTimes.$inject = ['SessionTimes'];
function sessionTimes (Times) {
  return Times.fetchAll();
}
