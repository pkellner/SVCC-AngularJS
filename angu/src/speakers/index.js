'use strict';

import angular from 'angular';
import details from './details';
import list from './list';
import social from './social-icons';
import bio from './bio';

export default angular.module('angu.speakers', [
    details,
    list
  ])
  .directive('speakerSocialIcons', social)
  .directive('speakerBio', bio)
  .config(redirect)
  .name;


redirect.$inject = ['$urlRouterProvider']
function redirect ($urlRouterProvider) {
  $urlRouterProvider.when(/^\/speakers/, singularizeUrl);
}

singularizeUrl.$inject = ['$match'];
function singularizeUrl ($match) {
  return $match.input.replace('/speakers', '/speaker');
}
