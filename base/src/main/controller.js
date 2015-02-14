'use strict';

module.exports = function MainController (faqs, sponsors) {
  this.faqs = faqs;
  this.sponsors = sponsors;
}
module.exports.$inject = ['faqs','sponsors'];
