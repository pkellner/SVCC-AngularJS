'use strict';

module.exports = require('angular')
  .module('main', [])
  .controller('AppController', require('./controller'))
  .config(require('./states'))
  .name;
