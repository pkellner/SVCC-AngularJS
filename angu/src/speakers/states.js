'use strict';

states.$inject = ['$stateProvider'];
function states ($stateProvider) {
  $stateProvider.state('speaker', {
    url: '/speakers/:camp/:speaker',
    parent: 'base',
    resolve: {
      speakerUrl: speakerUrl,
      speakers: getSpeaker
    },
    views: {
      '@layout': {
        controller: 'SpeakerDetailController',
        controllerAs: 'speaker',
        templateUrl: 'app/speakers/speaker-detail.html'
      }
    }
  });
}
export default states;

speakerUrl.$inject = ['$stateParams'];
function speakerUrl ($stateParams) {
  return `${$stateParams.camp}/${$stateParams.speaker}`;
}


getSpeaker.$inject = ['Speakers', 'speakerUrl'];
function getSpeaker (Speakers, speakerUrl) {
  return Speakers.fetchByUrl(speakerUrl).then(val => console.log(val));
}
