'use strict';

NavController.$inject = ['$rootScope']
function NavController ($rootScope) {
  this.isOpen = false;
  $rootScope.$on('$stateChangeSuccess', () => {
    this.isOpen = false;
  });
};

NavController.prototype.toggle = function () {
  this.isOpen = !this.isOpen;
};

module.exports = NavController;
