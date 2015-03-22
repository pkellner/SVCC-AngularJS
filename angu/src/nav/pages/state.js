'use strict';

import template from './state.html';

export default function () {
  return {
    restrict: 'E',
    scope: {
      state: '@'
    },
    transclude: true,
    controller: StateNavController,
    controllerAs: 'link',
    bindToController: true,
    template,
    compile: function (element, attributes) {
      element.find('li').find('a').attr('ui-sref', attributes.state);
    }
  };
}

StateNavController.$inject = ['$scope', '$state'];
function StateNavController ($scope, $state) {
  const checkActive = () => {
    this.active = $state.is(this.state);
  }
  checkActive();
  $scope.$on('$stateChangeSuccess', checkActive);
}
