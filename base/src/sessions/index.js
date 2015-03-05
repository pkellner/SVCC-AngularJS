'use strict';

module.exports = require('angular')
  .module('session', [])
  .factory('Sessions', require('./sessions'))
  .factory('SessionUrls', require('./urls'))
  .factory('SessionTimes', require('./times'))
  .factory('Tracks', require('./tracks'))
  .name;
