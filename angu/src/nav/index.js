'use strict';

module.exports = require('angular')
  .module('angu.nav', [])
  .directive('mainNav', require('./nav'))
  .directive('pageNav', require('./pages'))
  .directive('navToggle', require('./toggle'))
  .directive('homeNavItem', require('./pages/home-item'))
  .directive('ticketSignup', require('./tickets'))
  .name;
