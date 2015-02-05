'use strict';

exports = module.exports = function ($stateProvider, interpolateUrl) {
  $stateProvider
    .state('base.about', {
      url: '/about',
      templateUrl: interpolateUrl('app/{{codeCampType}}/miscpages/about.html')
    });
};
exports.$inject = ['$stateProvider', 'interpolateUrl'];
