'use strict';

module.exports = require('angular')
  .module('faq', [])
  .factory('Faqs', require('./faqs'))
  .name;
