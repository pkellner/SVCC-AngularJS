'use strict';

module.exports = require('angular')
  .module('codeCampBase', [
    // 3rd party modules
    require('angular-messages'),
    require('angular-ui-router'),
    require('angular-router-exception-handler'),
    // require('pusher-angular'),
    // require('angular-carousel'),
    // require('ui.bootstrap'),
    // our modules
    require('./multi'),
    require('./main'),
    require('./static'),
    // require('./account'),
    require('./faqs'),
    // require('./sessions'),
    // require('./speakers'),
    require('./sponsors')
  ])
  .factory('Model', require('./model'))
  .name;
