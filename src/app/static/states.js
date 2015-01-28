'use strict';

exports = module.exports = function ($stateProvider, interpolateTemplateUrl) {
  $stateProvider
    .state('base.about', {
      url: '/about',
      templateUrl: interpolateTemplateUrl('app/{0}/miscpages/about.html')
    });
};
exports.$inject = ['$stateProvider', 'interpolateTemplateUrl'];
