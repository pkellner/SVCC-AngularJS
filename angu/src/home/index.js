'use strict';

module.exports = require('angular')
  .module('home', [])
  .controller('HomeController', require('./controller'))
  .config(require('./states'))
  .name;
