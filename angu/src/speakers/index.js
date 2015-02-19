'use strict';

module.exports = require('angular')
  .module('speaker-details', [])
  .controller('SpeakerDetailsController', require('./controller'))
  .config(require('./states'))
  .name;
