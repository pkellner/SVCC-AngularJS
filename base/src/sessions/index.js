'use strict';

module.exports = require('angular')
  .module('session', [])
  .factory('Sessions', require('./sessions'))
  .name;
