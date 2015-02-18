'use strict';

module.exports = require('angular')
  .module('session-details', [])
  .controller('SessionDetailsController', require('./controller'))
  .config(require('./states'))
  .name;

module.exports = require('angular')
  .module('sessions', [])
  .controller('SessionsController', require('./controller'))
  .config(require('./states'))
  .name;