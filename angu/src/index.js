'use strict';

import parseConfig from './config';
import description from './description';
import layout from './layout';

module.exports = require('angular')
  .module('angUApp', [
    require('../../base'),
    require('angular-scroll'),
    require('./nav'),
    require('./home'),
    require('./speakers'),
    require('./sessions'),
    require('./fun')
  ])
  .config(layout)
  .config(parseConfig)
  .config(enableHtml5Mode)
  .config(anchorScroll)
  .directive('description', description)
  .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode ($locationProvider) {
  $locationProvider.html5Mode(true);
}

anchorScroll.$inject = ['$uiViewScrollProvider'];
function anchorScroll ($uiViewScrollProvider) {
  $uiViewScrollProvider.useAnchorScroll();
}
