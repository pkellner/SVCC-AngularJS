'use strict';

import angular from 'angular';
import router from 'angular-ui-router';

export default angular.module('codeCampBase.routing.status', [
  router
])
.service('pageStatus', pageStatus)
.directive('prerenderStatusCode', directive)
.name;

pageStatus.$inject = ['$rootScope'];
function pageStatus ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    this.code = (toState.data && toState.data.statusCode) || 200;
  });
}

function directive () {
  return {
    restrict: 'A',
    compile: function ($element, $attributes) {
      $attributes.$set('name', 'prerender-status-code');
    },
    controller: MetaStatusController
  };
}

MetaStatusController.$inject = ['pageStatus', '$scope', '$attrs'];
function MetaStatusController (status, $scope, $attributes) {
  $scope.$watch(
    () => {
      return status.code;
    },
    (value) => {
      $attributes.$set('content', value);
    }
  );
}
