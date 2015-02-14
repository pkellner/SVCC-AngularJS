'use strict';

module.exports = require('angular')
  .module('main', [])
  .controller('MainController', require('./controller'))
  .config(require('./states'))
  .name;
