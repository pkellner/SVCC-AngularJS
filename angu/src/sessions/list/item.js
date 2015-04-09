'use strict';

import template from './item.html';

export default function () {
  return {
    restrict: 'EA',
    template,
    scope: {
      session: '=',
      showTime: '=',
      showDay: '='
    }
  }
}
