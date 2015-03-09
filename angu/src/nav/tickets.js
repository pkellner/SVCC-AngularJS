'use strict';

exports = module.exports = function ($window, config) {

  function TicketNotificationController () {
    this.email = null;
    this.username = config.user.active;
    this.hotelBookingUrl = config.hotel.bookingUrl;
  };

  TicketNotificationController.prototype.request = function (email) {
    $window.location.href = '/angu/signuptobenotified?email=' + email;
  };

  return {
    restrict: 'E',
    controller: TicketNotificationController,
    templateUrl: 'app/nav/tickets.html',
    controllerAs: 'ticket',
    bindToController: true
  };

};
exports.$inject = ['$window', 'config']
