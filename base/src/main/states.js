'use strict';

module.exports = function ($stateProvider) {
  $stateProvider.state('base', {
    template: '<div ui-view id="base-view"></div>'
  });
};
module.exports.$inject = ['$stateProvider'];
