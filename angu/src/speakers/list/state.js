'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('speakers', {
    url: '/speaker',
    parent: 'base',
    resolve: {
      speakers: getSpeaker
    },
    views: {
      '@layout': {
        controller: 'SpeakerListController',
        controllerAs: 'list',
        templateUrl: 'app/speakers/list/speakers.html'
      }
    }
  });
}
export default state;

getSpeaker.$inject = ['Speaker', 'SessionTimes', '$q'];
function getSpeaker (Speaker, SessionTimes, $q) {
  return $q.all([
    Speaker.fetchAll(),
    SessionTimes.fetchAll()
  ])
  .then(function (results) {
    const [speakers, times] = results;
    speakers.reduce(function (sessions, speaker) {
      sessions.push.apply(sessions, speaker.sessions);
      return sessions;
    }, [])
    .forEach(function (session) {
      session.time = times.find(t => t.id === session.sessionTimesId);
    });
    return speakers;
  });
}
