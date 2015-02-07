'use strict';

module.exports = require('angular')
  .module('multitenant', [])
  .provider('campTemplate', require('./template'))
  .name;
