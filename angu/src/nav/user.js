'use strict';

exports = module.exports = function (config) {
  return {
    restrict: 'E',
    require: 'userNav',
    templateUrl: '/app/nav/user.html',
    controller: 'NavController',
    controllerAs: 'userNav',
    scope: {},
    link: function (scope, element, attributes, controller) {
      controller.username = config.user.active;
    }
  };
};
exports.$inject = ['config'];
