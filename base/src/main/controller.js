'use strict';

function AppController (CONFIG) {
  this.config = CONFIG;
}
AppController.$inject = ['CONFIG'];

module.exports = AppController;
