'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('speaker', {
    url: '/speakers/:camp/:speaker',
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

speakerUrl.$inject = ['$stateParams'];
function speakerUrl ($stateParams) {
  return `${$stateParams.camp}/${$stateParams.speaker}`;
}


getSpeaker.$inject = ['Speakers', 'speakerUrl'];
function getSpeaker (Speakers, speakerUrl) {
  return Speakers.fetchByUrl(speakerUrl);
}
