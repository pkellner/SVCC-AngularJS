'use strict';

exports = module.exports = function (Model) {
  return Model.extend({}, {
    url: '/rest/sponsors'
  });
};
exports.$inject = ['Model'];
