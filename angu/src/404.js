'use strict';

import template from './404.html';

export {stateNotFound, stateChangeError};

stateNotFound.$inject = ['$stateProvider', '$urlRouterProvider'];
function stateNotFound ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('404', {
    parent: 'base',
    views: {
      '@layout': {
        template
      }
    },
    data: {
      statusCode: 404 
    }
  });
  $urlRouterProvider.otherwise(function ($injector) {
    $injector.invoke(to404);  
  });
}

stateChangeError.$inject = ['$rootScope', '$state'];
function stateChangeError ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function () {
    to404($state);
  });
}

to404.$inject = ['$state'];
function to404 ($state) {
  return $state.go('404');
}
