'use strict';

exports = module.exports = function (config) {
  return {
    restrict: 'E',
    scope: {
      open: '='
    },
    templateUrl: 'app/nav/pages/index.html',
    link: function (scope) {
      scope.hotelBookingUrl = config.hotel.bookingUrl;
    }
  };
};
exports.$inject = ['config'];
