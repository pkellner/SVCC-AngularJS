'use strict';

import template from './videos.html';

export default state;

getVideoSessions.$inject = ['Video'];

function state ($stateProvider) {
  $stateProvider.state('videos', {
    url: '/videos',
    parent: 'base',
    resolve: {
      videoSessions: getVideos
    },
    views: {
      '@layout': {
        template,
        controller: 'VideoController',
        controllerAs: 'videos'
      }
    }
  });
}

function getVideos (Video) {
  return Video.fetchAll();
}
state.$inject = ['$stateProvider'];
