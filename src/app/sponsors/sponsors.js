'use strict';

exports = module.exports = function (Model) {
  return Model.extend({}, {
    url: '/rest/sponsor'
  });
};
exports.$inject = ['Model'];
