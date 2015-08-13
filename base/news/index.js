'use strict';

module.exports = require('angular')
    .module('news', [])
    .factory('News', require('./news'))
    .name;
