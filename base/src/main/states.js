'use strict';

module.exports = function ($stateProvider, campTemplate, $urlRouterProvider) {
  $stateProvider
    .state('layout', {
      abstract: true,
      template: '<div ui-view="header"></div><div ui-view autoscroll></div><div ui-view="footer"></div>',
      controller: 'AppController',
      controllerAs: 'app'
    })
    .state('base', {
      abstract: true,
      url: '',
      parent: 'layout',
      views: {
        header: {
          templateUrl: 'app/header.html'
        },
        footer: {
          templateUrl: 'app/footer.html'
        }
      }
    });
  $urlRouterProvider.when('', '/');
};
module.exports.$inject = ['$stateProvider', 'campTemplateProvider', '$urlRouterProvider'];
