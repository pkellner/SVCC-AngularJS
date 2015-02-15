'use strict';

module.exports = require('angular')
  .module('home', [])
  .controller('HomeController', require('./controller'))
  .directive('keynotePresenter', require('./presenter'))
  .config(require('./states'))
  .name;
