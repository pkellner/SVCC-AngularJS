'use strict';

var angular = require('angular');



module.exports = 
  .module('baseApp', [
    // 3rd party modules
    require('angular-messages'),
    require('angular-ui-router'),
    require('pusher-angular'),
    require('angular-carousel'),
    require('ui.bootstrap'),
    // our modules
    require('./account'),
    require('./main'),
    require('./faq'),
    require('./sessions'),
    require('./speakers'),
    require('./sponsors')
  ]);

