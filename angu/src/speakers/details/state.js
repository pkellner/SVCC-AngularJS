'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('speaker', {
    url: '/speaker/:camp/:speaker',
    parent: 'base',
    resolve: {
      speakerUrl: speakerUrl,
      speaker: getSpeaker
    },
    views: {
      '@layout': {
        controller: 'SpeakerDetailsController',
        controllerAs: 'details',
        templateUrl: 'app/speakers/details/details.html'
      }
    }
  });
}
export default state;

speakerUrl.$inject = ['Speaker', '$stateParams'];
function speakerUrl (Speaker, $stateParams) {
  return Speaker.formatUrl($stateParams);
}


getSpeaker.$inject = ['Speaker', 'speakerUrl', '$q', 'SessionTimes'];
function getSpeaker (Speaker, speakerUrl, $q, SessionTime) {
  return $q.all([
    Speaker.fetchByUrl(speakerUrl),
    SessionTime.fetchAll()
  ])
  .then(function (results) {
    const [speaker, times] = results;
    speaker.sessions
      .forEach(function (session) {
        session.time = times.find(t => t.id === session.sessionTimesId);
      });
    return speaker;
  });
}
