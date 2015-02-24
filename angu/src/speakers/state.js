'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('speakers', {
    url: '/speakers',
    parent: 'base',
    resolve: {
      speakerUrl: speakerUrl,
      speaker: getSpeaker
    },
    views: {
      '@layout': {
        controller: 'SpeakersController',
        controllerAs: 'details',
        templateUrl: 'app/speakers/speakers.html'
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
