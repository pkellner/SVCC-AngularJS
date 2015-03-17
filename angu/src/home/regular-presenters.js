'use strict';

import template from './regular-presenters.html';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      presenters: '='
    },
    template
  };
};
