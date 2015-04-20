'use strict';

NavController.$inject = ['$rootScope']
function NavController ($rootScope) {
  this.isOpen = false;
  $rootScope.$on('$stateChangeStart', () => {
    this.isOpen = false;
  });
};

NavController.prototype.toggle = function () {
  this.isOpen = !this.isOpen;
};

module.exports = NavController;
