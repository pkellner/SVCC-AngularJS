'use strict';

import template from './keynote-presenters.html';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      presenters: '='
    },
    template
  };
};
