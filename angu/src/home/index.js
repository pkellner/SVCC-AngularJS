'use strict';

module.exports = require('angular')
  .module('home', [])
  .controller('HomeController', require('./controller'))
  .directive('presenter', require('./presenter'))
  .directive('keynotePresenters', require('./keynote-presenters'))
  .directive('regularPresenters', require('./regular-presenters'))
  .config(require('./states'))
  .name;
