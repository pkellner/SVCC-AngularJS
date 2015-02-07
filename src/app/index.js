'use strict';

module.exports = require('angular')
  .module('baseApp', [
    // 3rd party modules
    require('angular-messages'),
    require('angular-ui-router')//,
    // require('pusher-angular'),
    // require('angular-carousel'),
    // require('ui.bootstrap'),
    // our modules
    // require('./main'),
    // require('./static'),
    // require('./account'),
    // require('./faqs'),
    // require('./sessions'),
    // require('./speakers'),
    // require('./sponsors')
  ])
  .provider('campTemplate', require('./template'))
  .factory('Model', require('./model'))
  .name;
