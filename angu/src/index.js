'use strict';

module.exports = require('angular')
  .module('angUApp', [
    require('../../base'),
    require('angular-scroll'),
    require('./nav'),
    require('./home'),
    require('./speakers')
  ])
  .config(enableHtml5Mode)
  .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode ($locationProvider) {
  $locationProvider.html5Mode(true);
}
