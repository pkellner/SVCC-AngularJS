'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      presenters: '='
    },
    templateUrl: 'app/home/regular-presenters.html'
  };
};
