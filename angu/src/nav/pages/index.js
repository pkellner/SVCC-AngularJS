'use strict';

PageNavController.$inject = ['config'];
function PageNavController (config) {
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
    templateUrl: 'app/nav/pages/index.html',
    controller: PageNavController,
    bindToController: true,
    controllerAs: 'pages'
  };
};
exports.$inject = ['config'];
