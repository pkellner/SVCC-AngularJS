'use strict';

exports = module.exports = function (Model) {
  class Sponsor extends Model {};
  Sponsor.url = '/rest/sponsor';
  return Sponsor.init();
};
exports.$inject = ['Model'];
