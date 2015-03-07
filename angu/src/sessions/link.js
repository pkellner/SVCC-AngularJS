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
      this.enabled = !this.session.title.startsWith('Session Title Coming');
    },
    controllerAs: 'link',
    bindToController: true
  };
}
