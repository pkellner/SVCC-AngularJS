'use strict';

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('speakers', {
    url: '/speakers',
    parent: 'base',
    resolve: {
      speakers: getSpeakers
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

getSpeakers.$inject = ['Speakers'];
function getSpeakers (Speakers) {
  return Speakers.fetchAll();
}
