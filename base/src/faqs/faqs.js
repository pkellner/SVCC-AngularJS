'use strict';

exports = module.exports = function (Model) {
  class Faq extends Model {}
  Faq.url = '/rest/faq';
  return Faq.init();
};
exports.$inject = ['Model'];
