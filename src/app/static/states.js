'use strict';

exports = module.exports = function ($stateProvider, campTemplate) {
  $stateProvider
    .state('base.home', {
      url: '/',
      templateProvider: campTemplate.provide('app/{{codeCampType}}/miscpages/{{codeCampType}}.html')
    })
    .state('base.about', {
      url: '/about',
      templateProvider: campTemplate.provide('app/{{codeCampType}}/miscpages/about.html')
    });
};
exports.$inject = ['$stateProvider', 'campTemplateProvider'];
