'use strict';

module.exports = require('angular')
  .module('baseApp', [
    // 3rd party modules
    'ngMessages',
    'ui.router',
    'pusher-angular',
    'ui.bootstrap',
    'angular-carousel',
    // our modules
    require('./account').name,
    require('./main').name,
    require('./faq').name,
    require('./sessions').name,
    require('./speakers').name,
    require('./sponsors').name
  ]);
