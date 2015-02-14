'use strict';

module.exports = require('angular')
  .module('angUApp', [
    require('../../base'),
    require('./home')
  ])
  .name;
