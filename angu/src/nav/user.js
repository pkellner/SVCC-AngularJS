'use strict';

exports = module.exports = function (CONFIG) {
  return {
    restrict: 'E',
    require: 'userNav',
    templateUrl: '/app/nav/user.html',
    controller: 'NavController',
    controllerAs: 'userNav',
    scope: {},
    link: function (scope, element, attributes, controller) {
      controller.username = CONFIG.loggedInUsername;
    }
  }
}
exports.$inject = ['CONFIG'];
