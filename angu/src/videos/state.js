'use strict';

import template from './videos.html';

export default state;

state.$inject = ['$stateProvider'];
function state ($stateProvider) {
  $stateProvider.state('videos', {
    url: '/videos',
    parent: 'base',
    views: {
      '@layout': {
        template,
        controller: 'VideosController',
        controllerAs: 'videos'
      }
    }
  });
}
