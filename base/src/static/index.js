'use strict';

module.exports = require('angular')
  .module('static', [])
  .config(require('./states'))
  .name;
