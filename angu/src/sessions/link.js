'use strict';

import template from './link.html';

export default function () {
  return {
    restrict: 'EA',
    transclude: true,
    template,
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
