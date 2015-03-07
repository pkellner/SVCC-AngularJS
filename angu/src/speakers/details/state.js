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

speakerUrl.$inject = ['Speakers', '$stateParams'];
function speakerUrl (Speakers, $stateParams) {
  return Speakers.formatUrl($stateParams);
}


getSpeaker.$inject = ['Speakers', 'speakerUrl'];
function getSpeaker (Speakers, speakerUrl) {
  return Speakers.fetchByUrl(speakerUrl);
}
