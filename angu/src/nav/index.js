'use strict';

module.exports = require('angular').module('angu.nav', [
  require('./pages')
])
.controller('NavController', require('./controller'))
.directive('mainNav', require('./nav'))
.directive('navToggle', require('./toggle'))
.directive('ticketSignup', require('./tickets'))
.directive('userNav', require('./user'))
.name;
