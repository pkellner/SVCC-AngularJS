'use strict';

import template from './nav.html';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {},
    controller: 'NavController',
    controllerAs: 'nav',
    template
  };
}
