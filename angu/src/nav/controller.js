'use strict';

function NavController () {
  this.isOpen = false;
};

NavController.prototype.toggle = function () {
  this.isOpen = !this.isOpen;
};

module.exports = NavController;
