'use strict';

module.exports = require('angular')
  .module('speaker', [])
  .factory('Speakers', require('./speakers'))
  .name;
