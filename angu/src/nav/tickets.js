'use strict';

import template from './tickets.html';

exports = module.exports = function ($window, config) {

  function TicketNotificationController () {
    this.requesting = false;
    this.email = null;
    this.username = config.user.active;
    this.hotelBookingUrl = config.hotel.bookingUrl;
  }

  TicketNotificationController.prototype.request = function (email) {
    $window.location.href = '/angu/signuptobenotified?email=' + email;
  };

  TicketNotificationController.prototype.showForm = function () {
    this.requesting = true;
  };

  return {
    restrict: 'E',
    controller: TicketNotificationController,
    template,
    controllerAs: 'ticket',
    bindToController: true
  };

};
exports.$inject = ['$window', 'config'];
