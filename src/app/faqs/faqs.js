'use strict';

exports = module.exports = function (Model) {
  return Model.extend({}, {
    url: '/rest/faq'
  });
};
exports.$inject = ['Model'];
