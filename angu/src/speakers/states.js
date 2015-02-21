'use strict';

exports = module.exports = function ($stateProvider) {
  $stateProvider.state('speakers', {
    url: '/speaker-details',
    parent: 'base',
    views: {
      '@layout': {
        controller: 'SpeakerDetailsController',
        controllerAs: 'speaker-details',
        templateUrl: 'app/speakers/speaker-detail.html'
      }
    }
  });
};
exports.$inject = ['$stateProvider'];
