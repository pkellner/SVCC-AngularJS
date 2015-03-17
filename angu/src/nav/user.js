'use strict';

import template from './user.html';

exports = module.exports = function (config) {
  return {
    restrict: 'E',
    require: 'userNav',
    template,
    controller: 'NavController',
    controllerAs: 'userNav',
    scope: {},
    link: function (scope, element, attributes, controller) {
      controller.username = config.user.active;
    }
  };
};
exports.$inject = ['config'];
