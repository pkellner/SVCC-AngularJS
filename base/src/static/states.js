'use strict';

exports = module.exports = function ($stateProvider, campTemplate) {
  $stateProvider
    .state('base.about', {
      url: '/about',
      templateProvider: campTemplate.provide('app/{{codeCampType}}/miscpages/about.html')
    });
};
exports.$inject = ['$stateProvider', 'campTemplateProvider'];
