'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    scope: {},
    controller: NavController,
    controllerAs: 'nav',
    templateUrl: 'app/nav/nav.html'
  };
}

function NavController () {
  this.isOpen = false;
};

NavController.prototype.toggle = function () {
  this.isOpen = !this.isOpen;
};
