'use strict';

module.exports = require('angular')
  .module('angu.nav', [])
  .directive('mainNav', require('./nav'))
  .name;
