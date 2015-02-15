'use strict';

module.exports = require('angular')
  .module('angu.nav', [])
  .controller('NavController', require('./controller'))
  .directive('mainNav', require('./nav'))
  .directive('pageNav', require('./pages'))
  .directive('navToggle', require('./toggle'))
  .directive('homeNavItem', require('./pages/home-item'))
  .directive('ticketSignup', require('./tickets'))
  .directive('userNav', require('./user'))
  .name;
