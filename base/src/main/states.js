'use strict';

module.exports = function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('base', {
    abstract: true,
    url: '',
    template: '<div ui-view id="base-view"></div>'
  });
  $urlRouterProvider.when('', '/');
};
module.exports.$inject = ['$stateProvider', '$urlRouterProvider'];
