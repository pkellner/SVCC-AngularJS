'use strict';

import angular from 'angular';
import layout from './layout.html';

export default state;

state.$inject = ['$stateProvider', 'layoutProvider'];
function state ($stateProvider, layoutProvider) {
  $stateProvider
    .state('layout', {
      abstract: true,
      template: layout
    })
    .state('base', {
      abstract: true,
      parent: 'layout',
      views: {
        header: {
          templateProvider: angular.bind(layoutProvider, layoutProvider.get, 'header')
        },
        footer: {
          templateProvider: angular.bind(layoutProvider, layoutProvider.get, 'footer')
        }
      }
    });
}
