'use strict';

exports = module.exports = function (Model) {
  class Sponsor extends Model {};
  Sponsor.url = '/rest/sponsor';
  return Sponsor;
};
exports.$inject = ['Model'];
