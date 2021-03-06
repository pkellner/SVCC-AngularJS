'use strict';

import template from './nav.html';

PageNavController.$inject = ['config', '$scope'];
function PageNavController (config, $scope) {
  this.show = function (state) {
    return config[state].show;
  }
  this.hotelBookingUrl = config.hotel.bookingUrl;
}

exports = module.exports = function (config) {
  return {
    restrict: 'E',
    scope: {
      open: '='
    },
    template,
    controller: PageNavController,
    bindToController: true,
    controllerAs: 'pages'
  };
};
exports.$inject = ['config'];
