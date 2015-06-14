'use strict';

module.exports = require('angular')
    .module('video', [])
    .factory('Videos', require('./videos'))
    .name;
