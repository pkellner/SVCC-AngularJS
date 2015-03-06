'use strict';

export default function () {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/sessions/link.html',
    scope: {
      session: '='
    },
    controller: function () {
      this.workshop = this.session.workshop;
    },
    controllerAs: 'link',
    bindToController: true
  };
}
